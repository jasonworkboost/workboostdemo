<template>
   <div>
   <ul v-for="(index, ii, aa) in labelsWB.questions">
       <li v-if="showWB == aa">
            <div class="col-md-12 col-xs-12"><h1 class="appraisal1-question"> {{ index }}</h1></div>
            <div class="grp-radio-bttn col-md-12 col-xs-12">
                <div class="col-md-1 col-xs-12"></div>
                <div class="radio-bttn col-md-2 col-xs-12" 
                    :style="{backgroundColor: hoverColor1, borderColor: colorsWB.color1, color: textColor1}"
                    ontouchstart="" 
                    @click="nextQuestion(1); hoverColor1 = 'white'; textColor1 = 'black'" 
                    @mouseover="hoverColor1 = colorsWB.color1; textColor1 = 'white'" 
                    @mouseleave="hoverColor1 = 'white'; textColor1 = 'black'">{{labelsWB.answerLikert1}}</div>
                <div class="radio-bttn col-md-2 col-xs-12" 
                    :style="{backgroundColor: hoverColor2, borderColor: colorsWB.color1, color: textColor2}"
                    ontouchstart="" 
                    @click="nextQuestion(2); hoverColor2 = 'white'; textColor2 = 'black'"
                    @mouseover="hoverColor2 = colorsWB.color1; textColor2 = 'white'" 
                    @mouseleave="hoverColor2 = 'white'; textColor2 = 'black'">{{labelsWB.answerLikert2}}</div>
                <div class="radio-bttn col-md-2 col-xs-12 text-center" 
                    :style="{backgroundColor: hoverColor3, borderColor: colorsWB.color1, color: textColor3}"
                    ontouchstart=""
                    @click="nextQuestion(3); hoverColor3 = 'white'; textColor3 = 'black'" 
                    @mouseover="hoverColor3 = colorsWB.color1; textColor3 = 'white'" 
                    @mouseleave="hoverColor3 = 'white'; textColor3 = 'black'">{{labelsWB.answerLikert3}}</div>
                <div class="radio-bttn col-md-2 col-xs-12" 
                    :style="{backgroundColor: hoverColor4, borderColor: colorsWB.color1, color: textColor4}"
                    ontouchstart=""
                    @click="nextQuestion(4); hoverColor4 = 'white'; textColor4 = 'black'"  
                    @mouseover="hoverColor4 = colorsWB.color1; textColor4 = 'white'" 
                    @mouseleave="hoverColor4 = 'white'; textColor4 = 'black'">{{labelsWB.answerLikert4}}</div>
                <div class="radio-bttn col-md-2 col-xs-12" 
                    :style="{backgroundColor: hoverColor5, borderColor: colorsWB.color1, color: textColor5}"
                    ontouchstart=""
                    @click="nextQuestion(5); hoverColor5 = 'white'; textColor5 = 'black'" 
                    @mouseover="hoverColor5 = colorsWB.color1; textColor5 = 'white'" 
                    @mouseleave="hoverColor5 = 'white'; textColor5 = 'black'">{{labelsWB.answerLikert5}}</div>
                <div class="col-md-1 col-xs-12"></div>
            </div>
       </li>
    </ul> 
 </div>
</template>
<script scoped>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex'; 

    export default {
        data(){
            return{
                hoverColor1:'white',
                hoverColor2:'white',
                hoverColor3:'white',
                hoverColor4:'white',
                hoverColor5:'white',
                textColor1: 'black',
                textColor2: 'black',
                textColor3: 'black',
                textColor4: 'black',
                textColor5: 'black',   
            }
        },
        computed:{
            ...mapGetters([
                'showWB','questionsWB','labelsWB','colorsWB'
            ])
        },
        methods: {
            ...mapActions([
                'nextQuestion'   
            ]),
        },
    }
</script>
<style>
    .appraisal1-question {
        font-size: 200%;
        color: black;
        text-align: center;
        margin-bottom: 30px;
    }
    .grp-radio-bttn {
        margin-left: -15px;
    }
    .radio-bttn {
        width: 17%;
        margin-left: 5px;
        text-align: center;
        border-radius: 15px;
        margin-bottom: 4px;
        font-size: 16px;
        line-height: 36px;
        border: 2px;
        border-style: solid;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }
    .radio-bttn:hover {
        cursor: pointer;
    }
    .radio-bttn:active{
       -ms-transform: translateY(1px);
       -webkit-transform: translateY(1px);
       -moz-transform: translateY(1px);
       -o-transform: translateY(1px);
        transform: translateY(1px);
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3);
    }
    ul {
        list-style-type: none;
        padding: 0;

    }
    @media only screen and (min-width: 577px) and (max-width: 991px) {
        .appraisal1-question {
            font-size: 250%;
        }
        .radio-bttn {
            width: 70%;
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            margin-bottom: 20px;
            font-size: 20px;
            line-height: 60px;
        }
        .radio-bttn:active{
        -ms-transform: translate(-50%, 1px);
        -webkit-transform: translate(-50%, 1px);
        -moz-transform: translate(-50%, 1px);
        -o-transform: translate(-50%, 1px);
        transform: translate(-50%, 1px);
        }
        .grp-radio-bttn {
        margin-left: 0px;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
        .appraisal1-question {
            font-size: 120%;
        }
        .radio-bttn {
            width: 70%;
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            margin-bottom: 10px;
            font-size: 15px;
            line-height: 38px;
        }
        .radio-bttn:active{
        -ms-transform: translate(-50%, 1px);
        -webkit-transform: translate(-50%, 1px);
        -moz-transform: translate(-50%, 1px);
        -o-transform: translate(-50%, 1px);
        transform: translate(-50%, 1px); 
        }
         .grp-radio-bttn {
        margin-left: 0px;
        }
    }
    @media only screen and (max-width: 375px) {
        .appraisal1-question {
            font-size: 100%;
        }
        .radio-bttn {
            width: 70%;
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 30px;
        }
        .radio-bttn:active{
        -ms-transform: translate(-50%, 1px);
        -webkit-transform: translate(-50%, 1px);
        -moz-transform: translate(-50%, 1px);
        -o-transform: translate(-50%, 1px);
        transform: translate(-50%, 1px); 
        }
         .grp-radio-bttn {
        margin-top: -12px;
        margin-left: 0px;
        }
        ul{
            margin-top: calc(-25px + 1vh);
        }
    }
</style>