<template>
<div class="col-md-12">
    <div class="col-md-4 col-sm-12" id="overalldata1">
        <div class="grdatacl" 
        id="grmenu" 
        :style="{borderColor: colorsWB.color1, color: shadowcolor1}"
            @mouseover="shadowcolor1 = colorsWB.color2" 
            @mouseleave="shadowcolor1 ='whitesmoke'">
            <div class="col-md-12 row grmenulistt">
                <p class="grlabels">{{labelsWB.resultsStat}}</p>
            </div>
            <div class="col-md-12 grmenulist">
                <div class="col-md-4">
                    <svg class="gricons" viewBox="0 0 100 125" :style="{fill: colorsWB.color1, stroke: colorsWB.color1}">
                        <path d="M89.83,93.71l-20-33.34a1.42,1.42,0,0,0-2.44,0L61.74,70,50.91,52.6V40.7H71.55A1.42,1.42,0,0,0,73,39.28a1.42,1.42,0,0,0-.35-.94L65.2,30l7.38-8.36a1.42,1.42,0,0,0-.13-2,1.42,1.42,0,0,0-.94-.35H49.46A1.42,1.42,0,0,0,48,20.7V52.6L37.77,69.17l-5.17-8.8a1.42,1.42,0,0,0-2.44,0l-20,33.39a1.42,1.42,0,0,0,.77,1.85,1.44,1.44,0,0,0,1.69-.49L31.37,63.89l4.72,8L16.53,103.44a1.42,1.42,0,0,0,.26,2,1.42,1.42,0,0,0,2-.26l.1-.16,17.7-28.53a5.71,5.71,0,0,1,1.29,1.61c.93,1.43,2.21,3.4,4.84,3.4s3.84-1.88,4.83-3.4S49,76,50,76s1.53.73,2.47,2.13l.06.09c1,1.47,2.23,3.3,4.77,3.3s3.84-1.89,4.85-3.41a10.77,10.77,0,0,1,.66-1L80.09,105a1.42,1.42,0,1,0,2.48-1.39l-.05-.08L63.46,72.75l5.23-8.86L87.44,95.2a1.42,1.42,0,0,0,2,.24A1.44,1.44,0,0,0,89.83,93.71ZM62.25,29a1.42,1.42,0,0,0,0,1.87l6.13,6.94H50.91V22.12H68.38ZM54.8,76.43c-1-1.47-2.24-3.3-4.79-3.3s-3.89,2-4.83,3.4-1.5,2.12-2.47,2.12-1.52-.72-2.45-2.09A8.43,8.43,0,0,0,38.1,74L49.49,55.69,61.24,74.62c-.19.2-.37.4-.55.61V75l-.92,1.46c-.94,1.49-1.49,2.11-2.46,2.11S55.8,77.9,54.8,76.43Z"/>
                    </svg>
                </div>
                <div class="col-md-8">
                    <div class="row"><p class="grlabeltext" :style="{backgroundColor: colorsWB.color1}">{{labelsWB.resultsChal}}</p></div>
                    <div class="row"> <p class="grdescriptext"><span class="grresulttext" :style="{color: colorsWB.color1}">{{resultsWB.scoreChall}}</span>{{labelsWB.resultsOutOf}}5</p></div>
                </div>
            </div>
            <div class="col-md-12 grmenulist">
                <div class="col-md-4">
                    <svg class="gricons" viewBox="0 0 100 125" :style="{fill: colorsWB.color1, stroke: colorsWB.color1}">
                        <path d="M50,28.53a22.73,22.73,0,0,0-2.5.14A22,22,0,0,0,34.7,66.28a18.54,18.54,0,0,1,5.67,13.21v2.82a5.44,5.44,0,0,0,5.44,5.44h8.39a5.44,5.44,0,0,0,5.44-5.44V79.49a18.1,18.1,0,0,1,5.53-13.07A21.78,21.78,0,0,0,72,50.51,22,22,0,0,0,50,28.53Zm12.4,35a22.12,22.12,0,0,0-6.77,16v2.82h0a1.44,1.44,0,0,1-1.44,1.44H45.81a1.44,1.44,0,0,1-1.44-1.44V79.49a22.57,22.57,0,0,0-6.89-16.08A18,18,0,0,1,47.95,32.64,18.7,18.7,0,0,1,50,32.53a18,18,0,0,1,18,18A17.82,17.82,0,0,1,62.4,63.52Z"/>
                        <path d="M56.51,89.72h-13a1.5,1.5,0,1,0,0,3h13a1.5,1.5,0,1,0,0-3Z"/>
                        <path d="M56.51,94.46h-13a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z"/>
                        <path d="M24.88,49a1.5,1.5,0,0,0-1.5-1.5H14.73a1.5,1.5,0,0,0,0,3h8.64A1.5,1.5,0,0,0,24.88,49Z"/>
                        <path d="M85.27,47.47H76.62a1.5,1.5,0,0,0,0,3h8.64a1.5,1.5,0,0,0,0-3Z"/>
                        <path d="M50,23.85a1.5,1.5,0,0,0,1.5-1.5V13.7a1.5,1.5,0,0,0-3,0v8.64A1.5,1.5,0,0,0,50,23.85Z"/>
                        <path d="M68.83,31.64a1.5,1.5,0,0,0,1.06-.44L76,25.09A1.5,1.5,0,1,0,73.88,23l-6.11,6.11a1.5,1.5,0,0,0,1.06,2.56Z"/>
                        <path d="M30.11,66.74,24,72.85A1.5,1.5,0,0,0,26.12,75l6.11-6.11a1.5,1.5,0,0,0-2.12-2.12Z"/>
                        <path d="M30.11,31.21a1.5,1.5,0,1,0,2.12-2.12L26.12,23A1.5,1.5,0,0,0,24,25.09Z"/>
                        <path d="M69.89,66.74a1.5,1.5,0,0,0-2.12,2.12L73.88,75A1.5,1.5,0,0,0,76,72.85Z"/>
                        <path d="M53.25,99.2H46.74a1.5,1.5,0,0,0,0,3h6.51a1.5,1.5,0,0,0,0-3Z"/>
                    </svg>
                </div>
                <div class="col-md-8">
                    <div class="row"><p class="grlabeltext" :style="{backgroundColor: colorsWB.color1}">{{labelsWB.resultsInsp}}</p></div>
                    <div class="row"> <p class="grdescriptext"><span class="grresulttext" :style="{color: colorsWB.color1}">{{resultsWB.scoreEdu}}</span>{{labelsWB.resultsOutOf}}5</p></div>
                </div>
            </div>
            <div class="col-md-12 grmenulist">
                <div class="col-md-4">
                   <svg class="gricons" viewBox="0 0 100 125" :style="{fill: colorsWB.color1, stroke: colorsWB.color1}">
                       <path d="M38.66,38.79a1.36,1.36,0,0,0,1.09.47h.4l0,0a1.54,1.54,0,0,0,1-1.72c-1.15-4-.23-7.72,2.22-8.94a1.32,1.32,0,0,0,.75-.78,1.53,1.53,0,0,0,0-1.08A1.42,1.42,0,0,0,42.25,26C38.51,27.79,37,32.85,38.54,38.3A.63.63,0,0,0,38.66,38.79Z"/>
                       <path d="M77.66,29.3A16.77,16.77,0,0,0,67,20a17.67,17.67,0,0,0-9.32-.25.38.38,0,0,0-.22.07,17.56,17.56,0,0,0-24.8,4.9,16.73,16.73,0,0,0-15.93,4.7C9.2,37,10,48.22,18.6,56.84,24.27,62.51,32.15,66,39.16,66a17.54,17.54,0,0,0,5.45-.83l-3.17,5.06a1.33,1.33,0,0,0,0,1.46,1.5,1.5,0,0,0,1.27.7h5c.79,3.08,1.77,8.56-.14,11.95-3.23,5.51-2.25,14.72.87,17.84a1.4,1.4,0,0,0,2,0,1.4,1.4,0,0,0,0-2c-2.09-2-3.09-9.76-.43-14.27,1.78-3,2-7.67.69-13.39h3.6a1.5,1.5,0,0,0,1.27-.7,1.33,1.33,0,0,0,0-1.45l-4.2-6.82a14.06,14.06,0,0,0,2.36,1,10.81,10.81,0,0,0,3.4.49c8.39,0,17.91-8.9,21.22-19.85C80.19,39.36,79.93,33.85,77.66,29.3Zm-48.47,8a33.06,33.06,0,0,0,4.2,15.83c2.67,4.71,6.23,8,10.09,9.21-6.46,2.26-16.13-.94-22.87-7.68-7.43-7.43-8.21-17-1.9-23.35a13.9,13.9,0,0,1,10-4.24,14.78,14.78,0,0,1,2.55.22A25.4,25.4,0,0,0,29.19,37.35ZM47.33,19.58c8.92,0,15.16,7.3,15.16,17.76,0,11.9-7.22,22.74-15.16,22.74S32.18,49.25,32.18,37.35C32.18,26.89,38.41,19.58,47.33,19.58Zm18,17.88c0-6-1.84-11.32-5.2-15.11a13.74,13.74,0,0,1,6.07.54,14,14,0,0,1,8.85,7.57c1.92,4,2.08,8.72.46,13.8h0C72.14,55.64,62.12,64,54.5,61.75a5.11,5.11,0,0,1-.94-.36C60.32,57.54,65.36,47.38,65.36,37.46ZM51.51,69.57H45.29l3.11-5.19Z"/>
                    </svg> 
                </div>
                <div class="col-md-8">
                    <div class="row"><p class="grlabeltext" :style="{backgroundColor: colorsWB.color1}">{{labelsWB.resultsFun}}</p></div>
                    <div class="row"> <p class="grdescriptext"><span class="grresulttext" :style="{color: colorsWB.color1}">{{resultsWB.scoreFun}}</span>{{labelsWB.resultsOutOf}}5</p></div>
                </div>
            </div>
            <div class="col-md-12 grmenulist">
                <div class="col-md-4">
                    <svg class="gricons" viewBox="0 0 100 125" :style="{fill: colorsWB.color1, stroke: colorsWB.color1}">
                       <path d="M86.72,54.18A1.67,1.67,0,0,0,85.53,53l-8.2-1.19L64.28,49.9,62,49.57l-3.32-6.74L52.81,31c-.44-.9-.89-1.8-1.33-2.71a1.72,1.72,0,0,0-2.11-.72,1.45,1.45,0,0,0-.85.72l-3.66,7.42L39,47.54l-1,2-7.51,1.09L17.46,52.55l-3,.43a1.68,1.68,0,0,0-1.19,1.19,1.73,1.73,0,0,0,.43,1.66l5.93,5.78,9.45,9.21,1.55,1.51-1.22,7.1q-1.11,6.5-2.23,13l-.51,3a1.71,1.71,0,0,0,2.5,1.92l7.33-3.86,11.67-6.14,1.82-1,6.47,3.41,11.67,6.14,2.68,1.4a1.71,1.71,0,0,0,1.89-.14,1.74,1.74,0,0,0,.61-1.78l-1.4-8.16q-1.11-6.5-2.23-13l-.33-1.92,5.31-5.18,9.45-9.21,2.17-2.11A1.7,1.7,0,0,0,86.72,54.18Zm-8.83,5.09L68.42,68.5c-.69.67-1.4,1.32-2.06,2a2.13,2.13,0,0,0-.4,2L66.21,74q1.06,6.18,2.12,12.37c.37,2.13.71,4.25,1.08,6.38l-4.28-2.25L53.42,84.36c-.85-.45-1.69-.91-2.55-1.34a1.84,1.84,0,0,0-1.77,0l-.27.14-1.34.7L36.39,89.7l-5.82,3,.8-4.67q1.12-6.51,2.23-13c.16-.94.33-1.89.48-2.84a1.81,1.81,0,0,0-.46-1.7,2.61,2.61,0,0,0-.22-.21l-1.09-1.06-9-8.76c-1.59-1.55-3.18-3.12-4.77-4.67l5.07-.74L36.7,53.17c1-.14,1.94-.21,2.87-.42s1.45-1.61,1.87-2.45L47,39l3-6,2.24,4.53q2.92,5.91,5.84,11.83c.42.87.82,1.76,1.28,2.6s1.89.93,2.86,1.08l12.5,1.82,6.7,1Z"/> 
                    </svg>
                </div>
                <div class="col-md-8">
                    <div class="row"><p class="grlabeltext" :style="{backgroundColor: colorsWB.color1}">{{labelsWB.resultsRel}}</p></div>
                    <div class="row"> <p class="grdescriptext"><span class="grresulttext" :style="{color: colorsWB.color1}">{{resultsWB.scoreRecom}}</span>{{labelsWB.resultsOutOf}}5</p></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8 col-sm-12" id="overalldata2">
        <div class="grdatacl" 
        id="grvisual" 
        :style="{borderColor: colorsWB.color1, color: shadowcolor2}"
            @mouseover="shadowcolor2 = colorsWB.color2" 
            @mouseleave="shadowcolor2 ='whitesmoke'">
            <p class="grlabels">{{labelsWB.resultsAct}}</p>
            <div class="row" style="position: relative; 
            width: 90%;
            margin-left: 50%;
            -webkit-transform: translate(-50%);
            transform: translate(-50%);">
                <wb-chart id="grchart">   
                </wb-chart>
            </div>
        </div>
    </div>
    <!-- here starts mob -->
    <div class="col-xs-12" id="grdatamob">
        <div class="col-xs-12" id="grdatamobdat">
            <transition name="loaddata" mode="out-in" appear>
                <wb-chart id="grchartmob" v-if="$store.state.resultDetailsSelect == 1" key="r1"
                    style="position: relative; 
                    width: 95%;
                    margin-left: 50%;
                    -webkit-transform: translate(-50%);
                    transform: translate(-50%);">   
                </wb-chart>
                <div v-if="$store.state.resultDetailsSelect == 2" key="r2">
                    <p class="row"  id="grdatamobdtext" >{{resultsWB.descrip}}</p>
                    <div class="row" id="grdatamobdtextc"> {{labelsWB.resultsCreated}}{{resultsWB.startdate}}</div>
                </div>
                <div v-if="$store.state.resultDetailsSelect == 3" key="r3">
                    <div class="col-xs-6 stattextmob"><p>{{labelsWB.resultsChal}}:</p></div><div class="col-xs-6 stattextmob"><p><span :style="{color: colorsWB.color1}" style="fontWeight: bold;">{{resultsWB.scoreChall}}</span> {{labelsWB.resultsOutOf}}5</p></div>
                    <hr class="col-xs-8 hrlinemob">
                    <div class="col-xs-6 stattextmob"><p>{{labelsWB.resultsInsp}}:</p></div><div class="col-xs-6 stattextmob"><p><span :style="{color: colorsWB.color1}" style="fontWeight: bold;">{{resultsWB.scoreEdu}}</span> {{labelsWB.resultsOutOf}}5</p></div>
                    <hr class="col-xs-8 hrlinemob">
                    <div class="col-xs-6 stattextmob"><p>{{labelsWB.resultsFun}}:</p></div><div class="col-xs-6 stattextmob"><p><span :style="{color: colorsWB.color1}" style="fontWeight: bold;">{{resultsWB.scoreFun}}</span> {{labelsWB.resultsOutOf}}5</p></div>
                    <hr class="col-xs-8 hrlinemob">
                    <div class="col-xs-6 stattextmob"><p>{{labelsWB.resultsRel}}:</p></div><div class="col-xs-6 stattextmob"><p><span :style="{color: colorsWB.color1}" style="fontWeight: bold;">{{resultsWB.scoreRecom}}</span> {{labelsWB.resultsOutOf}}5</p></div>
                    <hr class="col-xs-8 hrlinemob">
                </div>
            </transition>
        </div>
        <div class="col-xs-12" >
            <div id="grdatamobbut" :style="{borderColor: colorsWB.color1, backgroundColor:colorsWB.color1}" @click="$store.state.detailview = !$store.state.detailview">
                <p id="grdatamobbuttext">{{labelsWB.resultsHideDetails}}</p>
            </div>
        </div>
     </div>
</div>
    
</template>
<script>
import Chart from "./rchart.js"
import {mapGetters} from 'vuex';

export default {
    data(){
        return{
            shadowcolor1: 'whitesmoke',
            shadowcolor2: 'whitesmoke',
        }
    },
    components:{
            wbChart: Chart,
        },
      computed:{
        ...mapGetters([
        'colorsWB', 'resultsWB', 'labelsWB' 
        ]),
      }  
}
</script>
<style>
    #overalldata1{
        margin-left: -15px;
    }
    .grlabeltext{
        font-style: normal;
        margin-top: 10px;
        text-align: right;
        margin-right: 40px;
        padding-right: 5px;
        font-size: 13px;
        line-height: 18px;
        color:white;
        border: 1px solid white;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 5px;
    }
    .grdescriptext{
        margin-top: -1vh;
        text-align: right;
        margin-right: 40px;
        font-size: 18px;
        line-height: 20px;
        color: black;
    }
    .grresulttext{
        margin-right: 15px;
        font-size: 21px;
        line-height: 25px;
        font-weight: bold;
    }
    .grdatacl{
        border: solid 1px;
        margin-top: 3.5vh;
        box-shadow: 5px 8px; 
        height: 35vh;
    }
    .grmenulist{
        padding: 0px;
        margin-left:0px;
        width: 100%;
        height: 7.4vh;
        background-color:white; 
        border-bottom: solid 1px whitesmoke; 
    }
    .grmenulist:nth-child(2){
        border-top: solid 1px whitesmoke; 
    }
    .grmenulistt{
        padding: 0px;
        margin-left:0px;
        width: 100%;
        height: 4vh;
    }
    #grmenu{
        margin-left: 5%;
        width: 95%;
    }
    #grvisual{
        width: 100%;
    }
    .gricons{
        width: 60%;
        margin-left: 50%;
        margin-top: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    #griconrecom{
        width:65%;
    }
    #grchart{
        margin-top: 50px;
        height: 25vh;
    }
    #grchartmob{
        margin-top: 2vh;
        height: 25vh;
    }
    #grdatamob{
        display: none;
        margin-top: 5vh;
    }
    #grdatamobdat{
        height: 25vh;
    }
    #grdatamobbut{
        margin-left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 5vh;
        width: 40%;
        text-align: center;
        margin-top: 5vh;
        border-radius: 15px;
        font-size: 16px;
        line-height: 32px;
        border-width: 2px;
        border-style: solid;
    }
    #grdatamobbuttext{
        color: white;
        font-size: 16px;
        line-height: 5vh;   
    }
    #grdatamobbuttext:hover{
        font-weight: bold;
        cursor: pointer; 
    }
    #grdatamobdtext{
        font-size: 15px;
    }
    #grdatamobdtextc{
        font-size: 11px;
        color: grey;
        font-style: italic;
    }
    .hrlinemob{
        margin-top: 0px;
        height: 2px;
        color: whitesmoke;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
    }
    .stattextmob{
        text-align: center;
        margin-top: 0px;
        margin-bottom: -5px;
    }
    .stattextmob p{
        font-size: 18px;
    }
    .loaddata-enter-active, .loaddata-leave-active {
    transition: all .2s;
    }
    .loaddata-enter {
    opacity: 1;
    }
    .loaddata-enter-to {
    opacity: 1;
    }
    .loaddata-leave-to
    {
    opacity: 0;
    }
@media only screen and (min-width: 992px) and (max-width: 1200px){
    .grlabeltext{
        font-size: 12px;
        line-height: 14px;
    }
    .grdescriptext{
        margin-top: -1vh;
        text-align: right;
        margin-right: 40px;
        font-size: 15px;
        line-height: 15px;
        color: black;
    }
    .grresulttext{
        margin-right: 15px;
        font-size: 25px;
        line-height: 25px;
        font-weight: bold;
    }
}
@media only screen and (min-width: 576px) and (max-width: 991px) {
    #overalldata1, #overalldata2{
        display: none;
    }
    #grdatamob{
        display: block;
    }
}
@media only screen and (min-width: 376px) and (max-width: 576px) {
    #overalldata1, #overalldata2 {
        display: none;
    }
    #grdatamob{
        width: 100vw;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        display: block;
        margin-top: 8vh;
    }
    #grdatamobbut{
    margin-top: 7vh;
    }
}
@media only screen and (max-width: 375px) {
    #overalldata1, #overalldata2 {
        display: none;
    }
    #grdatamob{
        width: 100vw;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        display: block;
        margin-top: 8vh;
    }
    #grdatamobbut{
    margin-top: 9.5vh;
    }
    #grdatamobbuttext{
        font-size: 16px;
        line-height: 5vh;   
    }
    #grdatamobdtext{
        font-size: 12px;
    }
    .stattextmob{
        margin-bottom: -6px;
    }
    .stattextmob p{
        font-size: 14px;
    }
}

</style>
