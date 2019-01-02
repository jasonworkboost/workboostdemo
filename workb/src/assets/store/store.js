import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        showTerms: false,
        showPrivacy: false,
        detailview: false,
        valCheck: '',
        mainRequest: '',////this will get the entire array, kijken wat handig is
        show: 0,
        progress: 0,
        question: "",
        assignment: '',
        curiousFact: '',
        number: 30,
        event: 'happy',
        scienceMode: 1,
        particpantNR: 999,
        response: [],
        resultDetailsSelect: 1,
        inlog: {
            placeholderEvent: 'Event',
            placeholderCard: 'Card',
            buttonContinue: "Lets go!",
            popTexte: 'Please fill in your event',
            popTextc: 'Please fill in your card',
            errorMessage: 'Oh oh, please try again'
        },
        labels: {
            modalHeader: '',
            modalBody: '',
            modalPlaceholder: '',
            modalButton: '',
            checkScreen: '',
            checkScreenYes1: '',
            checkScreenYes2: '',
            checkScreenNo1: '',
            checkScreenNo2: '',
            answerLikert1: '',
            answerLikert2: '',
            answerLikert3: '',
            answerLikert4: '',
            answerLikert5: '',
            closePage: '',
            questions: {
                question0: 'DONOTCHANGE',
                question1: '',
                question2: '',
                question3: '',
                question4: '',
                question5: ''
            },
            placeholder4: '',
            buttonNext: '',
            succesMessage: '',
            funfactMessage: '',
            closeMessage: '',
            footerMessage1: 'Want to create your own?',
            footerMessage2: 'Check:',
            resultsHeader: 'Tussenstand',
            resultsComp: 'Voltooid',
            resultsTarg: 'Het doel',
            resultsBtnBack: 'Terug',

            resultsStatus: "Stat",
            resultsCode: "Cde",
            resultsName: "Nme",
            resultsDescr: "Dscription",
            resultsCreated: "Create @ ",
            resultsStat: "Sta",
            resultsAct: "Acti",
            resultsOutOf: "ot of ",
            resultsChal: "Chalenge",
            resultsInsp: "Insiration",
            resultsFun: "Fn",
            resultsRel: "Rlevance",
            resultsPressIcon: "Prss icons for details",
            resultsHideDetails: "Hde details",
            resultsInfo: "Informaion",
            resultsClose: "Clse ",
            resultsChartLbl: "Activities completed"
        },
        logos: {
            logoSmall: '',//require('../img/logoSmallAOgemeente.png'), //link to database
            logoBig: require('../img/logoBigWB.png')//require('../img/logoBigAOgemeente.png'), //link to database --> where to best save logos
        },
        colors: {
            color1: '#17C8BC',//'#0066b3', //'#17C8BC', //main color '#0f1626',// '#0066b3', //
            color2: '#ffbc00',//'#ffbc00', //secondary color'#ff533d',//
            color3: '#fc4a1a',//'#fc4a1a', //tertiary color '#ab987a',//
            color4: '#f4f9f9' //graybackground '#f4f9f9',//
        },
        iconstyle: [],//['#17C8BC','#f4f9f9','#f4f9f9','#f4f9f9']
        results: {
            name: "WorkBoost",
            target: 100,
            completed: 100,
            status: 1,
            descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            startdate: '2018-06-21',
            scoreFun: 5,
            scoreEdu: 4,
            scoreChall: 4,
            scoreRecom: 5,
            grLabels: ['11-06-2018', '12-06-2018', '13-06-2018', '14-06-2018', '15-06-2018', '16-06-2018', '17-06-2018', '18-06-2018', '19-06-2018'],
            grResults: [40, 20, 30, 50, 5, 10, 20, 40, 40],
        }
    },
    getters: {
        startScreen: state => {
            return { placeholderEvent: state.inlog.placeholderEvent, placeholderCard: state.inlog.placeholderCard, popTexte: state.inlog.popTexte, popTextc: state.inlog.popTextc, valCheck: state.valCheck, buttonContinue: state.inlog.buttonContinue }
        },
        modalWB: state => {
            return { modalHeader: state.labels.modalHeader, modalBody: state.labels.modalBody, modalButton: state.labels.modalButton, modalPlaceholder: state.labels.modalPlaceholder }
        },
        scienceModeWB: state => {
            return { scienceMode: state.scienceMode }
        },
        showWB: state => {
            return state.show;
        },
        progressWB: state => {
            return { width: state.progress + '%', backgroundColor: state.colors.color1 }
        },
        iconWB: state => {
            return state.iconstyle;
        },
        questionWB: state => {
            return state.question;
        },
        assignmentWB: state => {
            return state.assignment;
        },
        numberWB: state => {
            return state.number;
        },
        responseWB: state => {
            return state.response;
        },
        labelsWB: state => {
            return state.labels;
        },
        curiousFactWB: state => {
            return state.curiousFact;
        },
        logosWB: state => {
            return state.logos;
        },
        colorsWB: state => {
            return state.colors;
        },
        continueQ: state => {
            return state.mainRequest;
        },
        resultsWB: state => {
            return {
                target: state.results.target,
                event: state.event,
                completed: state.results.completed,
                scoreFun: state.results.scoreFun,
                scoreChall: state.results.scoreChall,
                scoreEdu: state.results.scoreEdu,
                scoreRecom: state.results.scoreRecom,
                grLabels: state.results.grLabels,
                grResults: state.results.grResults,
                descrip: state.results.descrip,
                startdate: state.results.startdate,
                name: state.results.name,
                status: state.results.status
            };
        },
        resultSelectWB: state => {
            return state.resultDetailsSelect;
        },
        legalWB: state => {
            return { showTerms: state.showTerms, showPrivacy: state.showPrivacy} 
        }
    },
    mutations: {
        contentFill: (state, payload) => {
            state.valCheck = '';
            state.mainRequest = 'letsgetthispartystarted';
            state.scienceMode = payload.science;
            state.labels.modalHeader = payload.lang.modalScienceHeader;
            state.labels.modalBody = payload.lang.modalScienceBody;
            state.labels.modalPlaceholder = payload.lang.modalSciencePlaceholder;
            state.labels.modalButton = payload.lang.modalScienceButton;
            state.question = payload.question.question;
            state.assignment = payload.question.task;
            state.number = payload.nr;
            state.event = payload.ev;
            state.curiousFact = payload.question.fact;
            state.labels.checkScreen = payload.lang.checkScreen;
            state.labels.checkScreenYes1 = payload.lang.checkScreenYes1;
            state.labels.checkScreenYes2 = payload.lang.checkScreenYes2;
            state.labels.checkScreenNo1 = payload.lang.checkScreenNo1;
            state.labels.checkScreenNo2 = payload.lang.checkScreenNo2;
            state.labels.answerLikert1 = payload.lang.answerLikert1;
            state.labels.answerLikert2 = payload.lang.answerLikert2;
            state.labels.answerLikert3 = payload.lang.answerLikert3;
            state.labels.answerLikert4 = payload.lang.answerLikert4;
            state.labels.answerLikert5 = payload.lang.answerLikert5;
            state.labels.questions.question1 = payload.lang.question1;
            state.labels.questions.question2 = payload.lang.question2;
            state.labels.questions.question3 = payload.lang.question3;;
            state.labels.questions.question4 = payload.lang.question4;;
            state.labels.questions.question5 = payload.lang.question5;;
            state.labels.placeholder4 = payload.lang.placeholder4;
            state.labels.buttonNext = payload.lang.buttonNext;
            state.labels.succesMessage = payload.lang.succesMessage;
            state.labels.funfactMessage = payload.lang.funfactMessage;
            state.labels.closeMessage = payload.lang.closeMessage;
            state.labels.footerMessage1 = payload.lang.footerMessage1;
            state.labels.footerMessage2 = payload.lang.footerMessage2;
            state.labels.closePage = payload.lang.closePage;
            state.logos.logoSmall = require('../img/' + payload.visual.ev_logos);
            state.logos.logoBig = require('../img/' + payload.visual.ev_logob);
            state.colors.color1 = payload.visual.ev_pcolor;
            state.colors.color2 = payload.visual.ev_scolor;
            state.colors.color3 = payload.visual.ev_tcolor;
            router.push({ path: '/question' });
        },
        resultFill: (state, payload) => {
            state.valCheck = '';
            state.mainRequest = 'timeforsomeresults';
            state.event = payload.ev;
            state.results.descrip = payload.desc;
            state.results.name = payload.name;
            state.results.target = payload.target;
            state.results.completed = payload.count;
            state.results.startdate = payload.startdate;
            state.results.scoreFun = payload.scoreFun;
            state.results.scoreEdu = payload.scoreEdu;
            state.results.scoreChall = payload.scoreChal;
            state.results.scoreRecom = payload.scoreRecom;
            state.results.grLabels = payload.grLabels;
            state.results.grResults = payload.grResults;
            state.logos.logoSmall = require('../img/' + payload.visual.ev_logos);
            state.logos.logoBig = require('../img/' + payload.visual.ev_logob);
            state.colors.color1 = payload.visual.ev_pcolor;
            state.colors.color2 = payload.visual.ev_scolor;
            state.colors.color3 = payload.visual.ev_tcolor;
            state.labels.resultsHeader = payload.lang.resultsHeader;
            state.labels.resultsComp = payload.lang.resultsComp;
            state.labels.resultsTarg = payload.lang.resultsTarg;
            state.labels.resultsBtnBack = payload.lang.resultsBtnBack;
            state.labels.footerMessage1 = payload.lang.footerMessage1;
            state.labels.footerMessage2 = payload.lang.footerMessage2;
            state.labels.resultsCreated = payload.lang.resultsCreated;
            state.labels.resultsStatus = payload.lang.resultsStatus;
            state.labels.resultsCode = payload.lang.resultsCode;
            state.labels.resultsName = payload.lang.resultsName;
            state.labels.resultsDescr = payload.lang.resultsDescr;
            state.labels.resultsStat = payload.lang.resultsStat;
            state.labels.resultsAct = payload.lang.resultsAct;
            state.labels.resultsOutOf = payload.lang.resultsOutOf;
            state.labels.resultsChal = payload.lang.resultsChal;
            state.labels.resultsInsp = payload.lang.resultsInsp;
            state.labels.resultsFun = payload.lang.resultsFun;
            state.labels.resultsRel = payload.lang.resultsRel;
            state.labels.resultsPressIcon = payload.lang.resultsPressIcon;
            state.labels.resultsHideDetails = payload.lang.resultsHideDetails;
            state.labels.resultsInfo = payload.lang.resultsInfo;
            state.labels.resultsClose = payload.lang.resultsClose;
            state.labels.resultsChartLbl = payload.lang.resultsChartLbl;
            router.push({ path: '/results' });
        },
        resultRefresh: (state, payload) => {
            state.results.completed = payload.count;
            state.results.scoreFun = payload.scoreFun;
            state.results.scoreEdu = payload.scoreEdu;
            state.results.scoreChall = payload.scoreChal;
            state.results.scoreRecom = payload.scoreRecom;
            state.results.grLabels = payload.grLabels;
            state.results.grResults = payload.grResults;
        },
        errorShow: (state) => {
            state.valCheck = state.inlog.errorMessage;
        },
        nextQuestion: (state, payload) => {
            if (state.show > 0) {
                state.response.push(payload);
            }
            state.show++;
        },
        progressBar: state => {
            switch (state.show) {
                case 0:
                    state.progress = 0;
                    state.iconstyle = [state.colors.color1, state.colors.color4,
                    state.colors.color4,
                    state.colors.color4];
                    break;
                case 1:
                    state.progress = 33;
                    state.iconstyle = [state.colors.color1, state.colors.color1,
                    state.colors.color4,
                    state.colors.color4];
                    break;
                case 2:
                    state.progress = 44;
                    break;
                case 3:
                    state.progress = 55;
                    break;
                case 4:
                    state.progress = 66;
                    state.iconstyle = [state.colors.color1, state.colors.color1,
                    state.colors.color1,
                    state.colors.color4];
                    break;
                case 5:
                    state.progress = 83;
                    break;
                case 6:
                    state.progress = 100;
                    state.iconstyle = [state.colors.color1, state.colors.color1,
                    state.colors.color1,
                    state.colors.color2];
                default:
                    break;
            }
        },
        resetState: state => {
            state.mainRequest = '';
            state.show = 0;
            state.progress = 0;
            state.number = '';
            state.event = '';
            state.response = [];
        },
        sciencenrProvide: (state, payload) => {
            if (!payload.nr == '') {
                state.particpantNR = payload.nr;
            }
            state.scienceMode = false;
        },
        langGett: (state, payload) => {
            state.inlog.placeholderEvent = payload.lang.inlogPlaceholderEvent;
            state.inlog.placeholderCard = payload.lang.inlogPlaceholderCard;
            state.inlog.buttonContinue = payload.lang.inlogButton;
            state.inlog.popTexte = payload.lang.inlogPopTexte;
            state.inlog.popTextc = payload.lang.inlogPopTextc;
            state.inlog.errorMessage = payload.lang.inlogErrorMessage;
            state.labels.footerMessage1 = payload.lang.footerMessage1;
            state.labels.footerMessage2 = payload.lang.footerMessage2;
        },
        closeLegal: state => {
            state.showTerms = false;
            state.showPrivacy= false;
        },
        openTerms: state => {
            state.showTerms = true;
            state.showPrivacy= false;
        },
        openPrivacy: state => {
            state.showTerms = false;
            state.showPrivacy= true;
        }
    },
    actions: {
        importContent: (context, payload) => {
            const request = payload;
            // const url = 'https://workboost.me/wbbend/public/api/events?event=00aa00&nr=1';
            // fetch(url, {
            //     method: 'POST',
            //     headers: {
            //         // 'Content-Type': 'application/json',
            //         // 'Accept': 'application/json',
            //         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            //         'Access-Control-Allow-Origin': '*'
            //     },
            //     mode: 'cors',
            //     // credentials: 'include',
            //     // redirect: 'follow',
            //     // cache: 'default'
            //     //body: JSON.stringify(request)
            // }).then(function (response) {
            //     console.log('response', response);
            //     const json = response.json();
            //     return json;
            //     }).then(function (res) {
            //         console.log(res);
            //         const jsonData = {
            //             ev: request.event,
            //             nr: request.nr,
            //             lang: res.lang[0],
            //             question: res.question[0],
            //             visual: res.visual[0],
            //             science: res.science
            //         };
            //         context.commit('contentFill', jsonData);
            //     }).catch(function (err) {
            //     console.log(err);
            // });
            axios({
                method: 'post',
                url: '/events',
                params: request
            }).then (res => {
                const jsonData = {
                            ev: payload.event, 
                            nr: payload.nr, 
                            lang: res.data.lang[0], 
                            question: res.data.question[0], 
                            visual: res.data.visual[0], 
                            science: res.data.science
                        };
                context.commit('contentFill', jsonData);
            }).catch(error => {
                context.commit('errorShow');
            })
        },
        importResult: (context, payload) => {
            const request = payload;
            axios({
                method: 'post',
                url: '/events',
                params: request
            }).then(res => {
                const jsonData = {
                    desc: res.data.description,
                    name: res.data.name,
                    ev: res.data.event,
                    target: res.data.target,
                    open: res.data.open,
                    visual: res.data.visual[0],
                    count: res.data.count,
                    startdate: res.data.startdate,
                    scoreFun: res.data.avgFun,
                    scoreEdu: res.data.avgEdu,
                    scoreChal: res.data.avgChal,
                    scoreRecom: res.data.avgRecom,
                    lang: res.data.lang[0],
                    grLabels: res.data.grLabels,
                    grResults: res.data.grResults
                };
                context.commit('resultFill', jsonData);
            }).catch(error => {
                context.commit('errorShow');
            })
        },
        refreshResult: (context, payload) => {
            const request = payload;
            axios({
                method: 'post',
                url: '/refresh',
                params: request
            }).then(res => {
                const jsonData = {
                    count: res.data.count,
                    scoreFun: res.data.avgFun,
                    scoreEdu: res.data.avgEdu,
                    scoreChal: res.data.avgChal,
                    scoreRecom: res.data.avgRecom,
                    grLabels: res.data.grLabels,
                    grResults: res.data.grResults
                };
                context.commit('resultRefresh', jsonData);
            }).catch(error => {
                context.commit('errorShow');
            })
        },
        nextQuestion: (context, payload) => {
            if (context.state.show < 5) {
                setTimeout(() => {
                    context.commit('nextQuestion', payload);
                    context.commit('progressBar');
                }, 300);
            } else {
                context.commit('nextQuestion', payload);
                context.commit('progressBar');
                const a = {
                    code: context.state.mainRequest,
                    event: (context.state.event),
                    nr: context.state.number,
                    chall: context.state.response[0],
                    enjoy: context.state.response[1],
                    edu: context.state.response[2],
                    recom: context.state.response[4],
                    exp: context.state.response[3],
                    partnr: context.state.particpantNR
                }
                axios({
                    method: 'post',
                    url: '/submit',
                    params: a
                }).then(res => {
                }).catch(error => {
                })
            }
        },
        resetState: (context) => {
            context.commit('resetState')
        },
        sciencenrProvide: (context, payload) => {
            context.commit('sciencenrProvide', payload);
        },
        langGet: (context, payload) => {
            const request = payload;
            axios({
                method: 'post',
                url: '/lang',
                params: request,
            }).then(res => {
                const jsonData = {
                    lang: res.data.lang[0]
                };
                context.commit('langGett', jsonData);
            }).catch(error => {
                context.commit('errorShow');
            })
        },
        closeLegal: (context) => {
            console.log('closinn');
           context.commit('closeLegal'); 
        },
        openTerms: (context) => {
            console.log('openterms');
           context.commit('openTerms'); 
        },
        openPrivacy: (context) => {
            console.log('openPrivacy');
           context.commit('openPrivacy'); 
        },
    }
})