<?php

namespace wbbend\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function postEvents(Request $request) {
        
        if ($request->has('event') && $request->has('nr')){
            $event = $request->input('event');
            $nr = $request->input('nr');
            $db = ['db', $event];
            $dbevent = implode($db);
            //check if there is input;
            $all = \DB::table('event')->where('ev_code', $event)->exists();
            if (!$all){
                return response()->json(['message' => 'Event and nr not found'], 404);
            }
            
            if ($nr == 999){
                $target = \DB::table('event')->where('ev_code', $event)->value('ev_target');
                $open = \DB::table('event')->where('ev_code', $event)->value('ev_open');
                $startdate = \DB::table('event')->where('ev_code', $event)->value('start_date');
                $descrip = \DB::table('event')->where('ev_code', $event)->value('ev_description');
                $name = \DB::table('event')->where('ev_code', $event)->value('ev_name');
                $check = \Schema::hasTable($dbevent);
                if (!$check){
                   return response()->json(['message' => 'watsdeze'], 404);
                }
                $count = \DB::table($dbevent)->count();
                $avgFun1 = \DB::table($dbevent)->avg('r_enjoy');
                $avgFun = number_format($avgFun1, 1, '.', '');
                $avgEdu1 = \DB::table($dbevent)->avg('r_edu');
                $avgEdu = number_format($avgEdu1, 1, '.', '');
                $avgChal1 = \DB::table($dbevent)->avg('r_chall');
                $avgChal = number_format($avgChal1, 1, '.', '');
                $avgRecom1 = \DB::table($dbevent)->avg('r_recom');
                $avgRecom = number_format($avgRecom1, 1, '.', '');
                $visual = \DB::table('event')->where('ev_code', $event)->select('ev_pcolor','ev_scolor','ev_tcolor','ev_logob','ev_logos')->get();
                $langp = \DB::table('event')->where('ev_code', $event)->value('ev_language'); 
                $lang = \DB::table('language')->where('lan', $langp)->select(
                    'footerMessage1',
                    'footerMessage2',
                    'resultsHeader',
                    'resultsComp',
                    'resultsTarg',
                    'resultsBtnBack',
                    'resultsStatus',
                    'resultsCode',
                    'resultsName',
                    'resultsDescr',
                    'resultsCreated',
                    'resultsStat',
                    'resultsAct',
                    'resultsOutOf',
                    'resultsChal',
                    'resultsInsp',
                    'resultsFun',
                    'resultsRel',
                    'resultsPressIcon',
                    'resultsHideDetails',
                    'resultsInfo',
                    'resultsClose',
                    'resultsChartLbl')->get();
                $timec = \DB::table('event')->where('ev_code', $event)->value('ev_offset');
                $correcttime = date("Y-m-d H:i", strtotime("+{$timec} hours"));
                $num_days = 8; 
                for ($i=0; $i<=$num_days; $i++){
                    $period[] = date("Y-m-d", strtotime("{$correcttime} -{$i} days"));
                    $activities[] = \DB::table($dbevent)->whereDate('correct_time', $period[$i])->count();
                }
                $period = array_reverse($period);
                $activities = array_reverse($activities);
                return response()->json([
                                        'description' => $descrip,
                                        'name' => $name,
                                        'event' => $event, 
                                        'target' => $target,
                                        'open' => $open, 
                                        'visual' => $visual, 
                                        'count' => $count,
                                        'startdate' => $startdate, 
                                        'avgFun' => $avgFun, 
                                        'avgEdu' => $avgEdu, 
                                        'avgChal' => $avgChal, 
                                        'avgRecom' => $avgRecom, 
                                        'lang' => $lang,
                                        'grLabels' => $period,
                                        'grResults' => $activities], 200); 
            }
            else {
                //check wheter database is open
                $open = \DB::table('event')->where('ev_code', $event)->value('ev_open');
                if ($open === 0){
                    return response()->json(['message' => 'Event is not open anymore'], 404);
                }
                //check for sciencemode
                $science = \DB::table('event')->where('ev_code', $event)->value('ev_science');
                //set the langauge
                $langp = \DB::table('event')->where('ev_code', $event)->value('ev_language');
                $lang = \DB::table('language')->where('lan', $langp)->select('checkScreen',
                                                                            'checkScreenYes1',
                                                                            'checkScreenYes2',
                                                                            'checkScreenNo1',
                                                                            'checkScreenNo2',
                                                                            'answerLikert1',
                                                                            'answerLikert2',
                                                                            'answerLikert3',
                                                                            'answerLikert4',
                                                                            'answerLikert5',
                                                                            'question1',
                                                                            'question2',
                                                                            'question3',
                                                                            'question4',
                                                                            'question5',
                                                                            'placeholder4',
                                                                            'buttonNext',
                                                                            'succesMessage',
                                                                            'funfactMessage',
                                                                            'closeMessage',
                                                                            'footerMessage1',
                                                                            'footerMessage2',
                                                                            'inlogPlaceholderEvent',
                                                                            'inlogPlaceholderCard',
                                                                            'inlogButton',
                                                                            'inlogPopTexte',
                                                                            'inlogPopTextc',
                                                                            'inlogErrorMessage',
                                                                            'modalScienceHeader',
                                                                            'modalSciencePlaceholder',
                                                                            'modalScienceButton',
                                                                            'modalScienceBody',
                                                                            'closePage')->get();
                //set the questions
                $questionp = \DB::table('event')->where('ev_code', $event)->value('ev_questionp');
                $questionex = \DB::table($questionp)->where('q_nr', $nr)->exists();
                if (!$questionex){
                return response()->json(['message' => 'invalid card number'], 404);   
                }
                $questions = \DB::table($questionp)->where('q_nr', $nr)->select('question','task','fact')->get();
                //colors and logos
                $visual = \DB::table('event')->where('ev_code', $event)->select('ev_pcolor','ev_scolor','ev_tcolor','ev_logob','ev_logos')->get();   
                return response()->json(['lang' => $lang, 'question' => $questions, 'visual' => $visual, 'science' => $science], 200);
            }
        } else {
            return response()->json(['message' => 'oh oh, please try again'], 404);
        }    
    }

    public function postRefresh(Request $request) { 
        $validated = $request->validate([
            'event' => 'required']);
        $event = $request->input('event');
        $db = ['db', $event];
        $dbevent = implode($db);
        $all = \DB::table('event')->where('ev_code', $event)->exists();
        if (!$all){
            return response()->json(['message' => 'Event and nr not found'], 404);
        }
        $check = \Schema::hasTable($dbevent);
            if (!$check){
                return response()->json(['message' => 'watsdeze'], 404);
            }
        $count = \DB::table($dbevent)->count();
        $avgFun1 = \DB::table($dbevent)->avg('r_enjoy');
        $avgFun = number_format($avgFun1, 1, '.', '');
        $avgEdu1 = \DB::table($dbevent)->avg('r_edu');
        $avgEdu = number_format($avgEdu1, 1, '.', '');
        $avgChal1 = \DB::table($dbevent)->avg('r_chall');
        $avgChal = number_format($avgChal1, 1, '.', '');
        $avgRecom1 = \DB::table($dbevent)->avg('r_recom');
        $avgRecom = number_format($avgRecom1, 1, '.', '');
        //$last_input = \DB::table($dbevent)->orderBy('created_at', 'desc')->first();
        $timec = \DB::table('event')->where('ev_code', $event)->value('ev_offset');
        $correcttime = date("Y-m-d H:i", strtotime("+{$timec} hours"));
        $num_days = 8; 
        //how to find last inserted
        for ($i=0; $i<=$num_days; $i++){
            $period[] = date("Y-m-d", strtotime("{$correcttime} -{$i} days"));
            $activities[] = \DB::table($dbevent)->whereDate('correct_time', $period[$i])->count();
        }
        $period = array_reverse($period);
        $activities = array_reverse($activities);

        return response()->json(['count' => $count, 
                                'avgFun' => $avgFun, 
                                'avgEdu' => $avgEdu, 
                                'avgChal' => $avgChal, 
                                'avgRecom' => $avgRecom,
                                'grLabels' => $period,
                                'grResults' => $activities], 200);        
    }

    public function postSubmit(Request $request) {       
        
        $validated = $request->validate([
            'code' => 'required',
            'event'=> 'required',
            'nr' => 'required',
            'chall' => 'required',
            'enjoy' => 'required',
            'edu' => 'required',
            'recom' => 'required',
            'exp'=> 'required',
            'partnr' => 'required'

        ]);
        $ev_code = $request->input('event');
        $temp= ['db', $ev_code];
        $code = $request->input('code');
        $event = implode($temp);
        $nr = $request->input('nr');
        $chall = $request->input('chall');
        $enjoy = $request->input('enjoy');
        $edu = $request->input('edu');
        $exp = $request->input('exp');
        $recom = $request->input('recom');
        $partnr = $request->input('partnr');

        $timec = \DB::table('event')->where('ev_code', $ev_code)->value('ev_offset');

        $correcttime = date("Y-m-d H:i", strtotime("+{$timec} hours"));
            //check if code is valid
        if ($code ==='letsgetthispartystarted') {
            //check whether table exists
            $check = \Schema::hasTable($event);
            if (!$check){
                return response()->json(['message' => $event], 404);
            }
             //insert data in the table
            $insert = \DB::table($event)->insert(
                array(
                    'tasknr' => $nr,
                    'partnr' => $partnr,
                    'r_chall' => $chall,
                    'r_enjoy' => $enjoy,
                    'r_edu' => $edu,
                    'r_exp' => $exp,
                    'r_recom' => $recom,
                    'correct_time' => $correcttime
                )
            );
            return response()->json(['message' => $recom], 201);
        } else {
            return response()->json(['message' => 'unAuthorized'], 404);
            }
    }

    public function postLang(Request $request) { 
        $lan = $request->input('lang');
        $lang = \DB::table('language')->where('lan', $lan)->select(
            'inlogPlaceholderEvent',
            'inlogPlaceholderCard',
            'inlogButton',
            'inlogPopTexte',
            'inlogPopTextc',
            'inlogErrorMessage',
            'footerMessage2',
            'footerMessage1')->get();
        return response()->json(['lang' => $lang], 201); 
    }

    public function postReport(Request $request){
        $validated = $request->validate([
            'event'=> 'required',
            'partnr' => 'required'

        ]);
        $event = $request->input('event');
        $partnr = $request->input('partnr');
        $db = ['db', $event];
        $dbevent = implode($db);
        //Info event
        //Info how many excercises completed and average scores
        //INfo most challenging, most energizing, most relevant, most novel
        //Favorite type of excercise + give examples of most challenging, enerzing and novel
        //Retrieve all dates for specific participant and put in var time, the rest of the code will calculate favorite day
        // $time = array("2018-09-18","2018-09-18","2018-09-18","2018-09-17","2018-09-17","2018-09-17","2018-09-16","2018-09-16","2018-09-16","2018-09-16");
        // foreach ($time as &$value) {
        //     $value = date("l",strtotime($value));
        // }
        // $e = array_count_values($time);
        // arsort($e);
        // $popular = array_slice(array_keys($e), 0, 5, true);
        // $max = $e[$popular[0]];
        // if ($max > $e[$popular[1]]) {
        //     echo "Your favorite workboost day is ".$popular[0]." with ".$max." occurrences.";
        //     exit;
        // }
        // if ($max > $e[$popular[2]]) {
        //     echo "Your favorite workboost days are ".$popular[0]." and ".$popular[1]." with ".$max." occurrences.";
        //     exit;
        // }
        // if ($max > $e[$popular[3]]) {
        //     echo "Your favorite workboost days are ".$popular[0].", ".$popular[1]." and ".$popular[2]." with ".$max." occurrences.";
        //     exit;
        // }
        // else {
        //     echo "You have no favorite workboost day!";
        //     exit;
        // }
    }

}  