<template>
   <div>
    <ul v-for="(index, ii, aa) in labelsWB.questions">
       <li v-if="showWB == aa">
        <div class="col-md-12 col-xs-12"><h1 class="appraisal-question"> {{index}}</h1></div>
         <div class="col-md-12 col-xs-12">
             <textarea class="form-control" rows="6" id="comment" :placeholder="labelsWB.placeholder4" v-model="message" :style="{borderColor: focusColor}" @focus="focusColor=colorsWB.color1" @blur="focusColor='#f9f9f9'"></textarea>
         </div>
         <div v-if="message!=''" class="save-bttn col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8 text-right" 
            :style="{backgroundColor: hoverColor1, borderColor: colorsWB.color1, color: textColor1}"
            ontouchstart=""
            @click="nextQuestion(message); hoverColor1 = 'white'; textColor1 = 'black' "  
            @mouseover="hoverColor1 = colorsWB.color1; textColor1 = 'white';" 
            @mouseleave="hoverColor1 = 'white'; textColor1='black'">{{labelsWB.buttonNext}}</div>
       </li>
    </ul>
 </div>
</template>
<script scoped>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex'; 

    export default {
        data() {
            return {
                message: '',
                hoverColor1: 'white',
                textColor1: 'black',
                focusColor: '#f9f9f9'
            }
        },
        computed:{
            ...mapGetters([
                'showWB','labelsWB','colorsWB'
            ])
        },
        methods: {
            ...mapActions([
                'nextQuestion'
            ])
        },
    }
</script>
<style>
    .appraisal-question {
        font-size: 200%;
        color: black;
        text-align: center;
        margin-bottom: 50px;
    }
    .save-bttn {
        text-align: center;
        margin-top: 45px;
        border-radius: 15px;
        margin-bottom: 4px;
        font-size: 16px;
        line-height: 36px;
        border-width: 2px;
        border-style: solid;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }
    .save-bttn:hover {
        cursor: pointer;
    }
    .save-bttn:active{
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
        .appraisal-question {
            font-size: 250%;
        }
        .save-bttn {
            width: 70%;
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            margin-bottom: 20px;
            font-size: 20px;
            line-height: 50px;
        }
        .save-bttn:active{
        -ms-transform: translate(-50%, 1px);
        -webkit-transform: translate(-50%, 1px);
        -moz-transform: translate(-50%, 1px);
        -o-transform: translate(-50%, 1px);
        transform: translate(-50%, 1px);
        }
        .form-control {
            font-size: 25px;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
        .appraisal-question {
            font-size: 120%;
        }
        .form-control {
            font-size: 14px;
        }
        .save-bttn {
            margin-top: 30px;
            width: 70%;
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 35px;
        }
        .save-bttn:active{
        -ms-transform: translate(-50%, 1px);
        -webkit-transform: translate(-50%, 1px);
        -moz-transform: translate(-50%, 1px);
        -o-transform: translate(-50%, 1px);
        transform: translate(-50%, 1px);
        }
    }
    @media only screen and (max-width: 375px) {
        .appraisal-question {
            font-size: 100%;
            margin-bottom: 10px;
        }
        .form-control {
            font-size: 12px;
        }
        .save-bttn {
            margin-top: 40px;
            width: 70%;
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 35px;

        }
        .save-bttn:active{
        -ms-transform: translate(-50%, 1px);
        -webkit-transform: translate(-50%, 1px);
        -moz-transform: translate(-50%, 1px);
        -o-transform: translate(-50%, 1px);
        transform: translate(-50%, 1px);
        }
    }
</style>