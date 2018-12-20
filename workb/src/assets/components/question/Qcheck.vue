<template>
<div>
    <div class="col-md-12 col-xs-12 text-center">
            <h1 id="task-question" :style="{color: colorsWB.color3}">{{labelsWB.checkScreen}}</h1>
        </div>
        <div class="col-md-12 col-xs-12 text-center">
            <h2 id="task-description">"{{ assignmentWB }}"<span style="font-style: italic; color: gray" > — #{{ numberWB }}</span></h2>
        </div>
        <div class="col-md-12 col-xs-12 text-center">
            <div class="bttn"
                :style="{backgroundColor: hoverColor1, borderColor: colorsWB.color1}"  
                ontouchstart=""
                @click="nextQuestion('Now we are talking!')" 
                @mouseover="hoverColor1 = colorsWB.color1" 
                @mouseleave="hoverColor1 = 'white'"><span :style="{color: colorsWB.color3}">{{labelsWB.checkScreenYes1}}</span> {{labelsWB.checkScreenYes2}}</div>
        </div>
        <div class="col-md-12 col-xs-12 text-center">
            <div class="bttn"
                :style="{backgroundColor: hoverColor2, borderColor: colorsWB.color1}"
                ontouchstart="" 
                @click.prevent="$router.push({ path: '/'})"
                @mouseover="hoverColor2 = colorsWB.color1" 
                @mouseleave="hoverColor2 = 'white'">
                <span :style="{color: colorsWB.color3}">{{labelsWB.checkScreenNo1}}</span> {{labelsWB.checkScreenNo2}}
            </div>
        </div>
</div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex'; 
    
      export default {
        data(){ 
            return{
                hoverColor1: 'white',
                hoverColor2: 'white'
            }
        },
        computed: {
            ...mapGetters([
                'assignmentWB','numberWB', 'labelsWB','colorsWB'
            ]),
        },
        methods:{
            ...mapActions([
                'nextQuestion'
            ]),
        },
    }
</script>
<style>   
    #task-question {
        font-weight: bold;
        font-size: 175%;
        margin-bottom: 10px;
        margin-top: 30px;
    }
    #task-description {
        font-size: 150%;
        color: black;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .bttn {
        width: 40%;
        font-size: 125%;
        font-weight: 200;
        line-height: 40px;
        font-family: Raleway;
        background-color: white;
        border-radius: 25px;
        border: solid;
        border-width: 2px;
        color: black;
        margin-top: 30px;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }
    .bttn:hover{
        cursor: pointer;
        color: white;
    }
    .bttn:active{
        -ms-transform: translate(-50%,1px);
        -webkit-transform: translate(-50%,1px);
        -moz-transform: translate(-50%,1px);
        -o-transform: translate(-50%,1px);
        transform: translate(-50%,1px);
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3);
    }
    .appraisal-question{
        font-size: 200%;
        color: black;
        text-align: center;
        margin-bottom: 30px;
    }
    @media only screen and (min-width: 577px) and (max-width: 991px) {
        #task-question {
            font-size: 250%;
            margin-bottom: 50px;
        }
        #task-description {
            font-size: 200%;
            margin-top: 40px;
            margin-bottom: 50px;
        }
        .bttn {
            width: 70%;
            font-size: 200%;
            line-height: 60px;
            margin-top: 40px;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
          #task-question {
            font-size: 150%;
            margin-bottom: 0px;
        }
        #task-description {
            font-size: 120%;
            margin-top: 40px;
            margin-bottom: 20px;
        }
        .bttn {
            width: 70%;
            font-size: 124%;
            line-height: 40px;
            margin-top: 20px;
        }
    }
    @media only screen and (max-width: 375px) {
        #task-question {
            font-size: 110%;
            margin-bottom: 10px;
        }
        #task-description {
            font-size: 100%;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .bttn {
            width: 70%;
            font-size: 100%;
            line-height: 35px;
            margin-top: 20px;
        }
    }
</style>