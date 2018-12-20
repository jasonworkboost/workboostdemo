<template>
<div>
    <div class="coll-xs-12 row">
        <div class="col-xs-2"></div>
        <div class="col-xs-4" style="vertical-align: middle;">
            <p id="scomplete">{{labelsWB.resultsComp}}</p>
        </div>
        <div class="col-xs-4" style="vertical-align: middle;">
            <p id="starget">{{labelsWB.resultsTarg}}</p>
        </div>
        <div class="col-xs-2"></div>
    </div>
    <div class="coll-xs-12 row">   
        <div class="col-xs-2"></div>
        <div class="col-xs-4 line" style="vertical-align: middle;">
            <p id="completed">{{resultsWB.completed}}</p>
        </div>
        <div class="col-xs-4" style="vertical-align: middle;">
            <p id="target" style="text-align: right;">{{resultsWB.target}}</p>
        </div>
        <div class="col-xs-2"></div>
    </div>
    <div class="coll-xs-12 row">
        <div id="rbgmag">
        <svg id="resultsMag" 
        viewBox="0 0 339.03 299" 
        @mouseover="rdcolor='white'" 
        @mouseleave="rdcolor='transparent'" 
        @click="toggleDetail();">
            <path :style="{fill: rdcolor}" d="M126.84,26.21a80.61,80.61,0,1,0,80.61,80.61A80.71,80.71,0,0,0,126.84,26.21Zm0,9.49a71.24,71.24,0,0,1,66.61,46.35l-16,25.12h-.12c-.23-.06-.52-.06-.75-.12a10.66,10.66,0,0,0-1.91-.17c-.12,0-.23-.06-.41-.06s-.29.06-.46.06h-.75l-6.54-14.35-6.08-13.37a14.22,14.22,0,1,0-24.07-10.24,14,14,0,0,0,3.3,9l-15.39,25.64-13.54,22.57c-.12-.06-.29,0-.46-.06a13.46,13.46,0,0,0-2.14-.23h-.23c-.23,0-.41.06-.58.06a7.76,7.76,0,0,0-1.16.06l-5.61-11.23-6.13-12.21a14,14,0,0,0,4-9.84,14.24,14.24,0,1,0-26.1,7.87L57.1,120.83a69.52,69.52,0,0,1-1.39-13.95A71.19,71.19,0,0,1,126.84,35.7Zm45.43,81a3.69,3.69,0,0,1,.41-.12,5,5,0,0,1,1.33-.29h.35a4.35,4.35,0,0,1,1.5.29,1.73,1.73,0,0,1,.46.23,4.64,4.64,0,0,1,2.6,4.17,4.75,4.75,0,0,1-9.49,0A4.89,4.89,0,0,1,172.27,116.72Zm-20.14-43.4a5.94,5.94,0,0,1-1.39.29h-.29a4.35,4.35,0,0,1-1.5-.29,2.7,2.7,0,0,1-.58-.29,4.72,4.72,0,1,1,6.89-4.17,4.68,4.68,0,0,1-2.78,4.28Zm-67,23.78a2.06,2.06,0,0,1-.58.12h-1A2.55,2.55,0,0,1,83,97.1a6.17,6.17,0,0,1-1.1-.41,4.67,4.67,0,0,1-2.55-4.11,4.75,4.75,0,1,1,9.49,0,4.71,4.71,0,0,1-2.66,4.22A3.51,3.51,0,0,1,85.17,97.1Zm20.6,38.66a2.82,2.82,0,0,1,.64-.23,4.51,4.51,0,0,1,1.22-.23h.29a4.35,4.35,0,0,1,1.5.29,2.7,2.7,0,0,1,.58.29,4.66,4.66,0,1,1-4.22-.12Zm21.06,42.19a71.11,71.11,0,0,1-66.38-45.83l19.44-26c.17.06.41.06.58.12a14.32,14.32,0,0,0,1.68.35,10.33,10.33,0,0,0,1.33.12c.23,0,.46.06.69.06a5.7,5.7,0,0,0,1-.12H86l6.08,12.21,5.61,11.23a14,14,0,0,0-4,9.84,14.24,14.24,0,0,0,28.47,0,14,14,0,0,0-3.3-9l13.6-22.63,15.34-25.58a.43.43,0,0,1,.29.06,14.18,14.18,0,0,0,2.2.23c.12,0,.17.06.29.06s.29-.06.41-.06h.81l6.08,13.37,6.54,14.41a14.22,14.22,0,1,0,24.07,10.24,14.07,14.07,0,0,0-3.07-8.74l11.4-17.88A73,73,0,0,1,198,106.82,71.25,71.25,0,0,1,126.84,177.94Z"/>
            <path style="color: white;" d="M308.14,247.91l-72.4-72.4a28.26,28.26,0,0,0-24.25-7.93,104.12,104.12,0,1,0-24,24,31,31,0,0,0-.35,4.05,28.32,28.32,0,0,0,8.33,20.14l72.4,72.4A28.47,28.47,0,0,0,316.54,268,28.52,28.52,0,0,0,308.14,247.91ZM32,106.82a94.85,94.85,0,1,1,94.85,94.85A94.94,94.94,0,0,1,32,106.82ZM301.43,281.41a19.44,19.44,0,0,1-26.85,0L202.24,209a19,19,0,0,1,26.85-26.85l72.34,72.45a18.93,18.93,0,0,1,0,26.79Z"/>
        </svg>
        <p id="rtextlabel" :style="{color: rdcolor}">Details</p>
        </div>
    </div>
        <div class="back-bttn" 
        @click="$router.push({ path: '/'})"
        :style="{color: colorsWB.color1}">{{labelsWB.resultsBtnBack}}
        </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data (){
        return {
            hoverColor1: 'white',
            rdcolor:'transparent'
        }
    },
    computed: {
            ...mapGetters([
            'colorsWB','logosWB','labelsWB','resultsWB' 
            ]),
        },
    methods: {
        toggleDetail(){
                this.$store.state.detailview = !this.$store.state.detailview;
            }
    }
  
}
</script>
<style>
    .line{
       border-right: 2px;
       border-right-style: solid;
       border-right-color: white;
   }
   #scomplete, #starget, #completed, #target {
       color: white;
   }
    #starget{
        text-align:right;
        font-size:20px; 
        line-height: 20px;
    }
    #scomplete{
        text-align: left;
        font-size:20px; 
        line-height: 20px;
        
    }
    #rtextlabel{
     text-align: center;
     color: transparent;
     margin-top: -15px;
     font-size:20px; 
     line-height: 20px;
     -webkit-transition:all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
    }
    #resultsMag{
        padding-left:40px;
        padding-right:40px;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        width: 15%;
        margin-top: 7%;
        fill:white;
        stroke: white;
        -webkit-transition:all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
     #resultsMag path{
        stroke-width: 1px;
    }
    #resultsMag:hover{
        cursor: pointer;
        padding-left:80px;
        padding-right:0px;
    }
   .back-bttn {
        text-align: center;
        background-color: white;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        border-radius: 15px;
        max-width:200px;
        font-size: 18px;
        line-height: 36px;
        margin-top: 5vh;
        font-weight: 500;
    }
    .back-bttn:hover{
        cursor: pointer;
        font-weight: bold;
    }
    #completed{
        text-align: left;
    }
    #target{
        text-align: right;
    }
    #target, #completed{
        font-size:140px; 
        line-height: 140px;
    }
    @media only screen and (min-width: 577px) and (max-width: 991px){
        #target, #completed{
        font-size:100px; 
        line-height: 100px;
        }
        #resultsMag{
        width: 30%;
        margin-top: 5vh;
        }
        .back-bttn{
        margin-top: 7%;
        }
        
    }
    @media only screen and (min-width: 374px) and (max-width: 576px){
        #target, #completed{
        font-size:60px; 
        line-height: 60px;
        }
        .back-bttn{
        margin-top: 8vh;
        }
        tn{
        max-width:200px;
        font-size: 16px;
        line-height: 36px;
        margin-top: 15%;
        }
        #resultsMag{
        width: 45%;
        margin-top: 8vh;
        }
    }  
    @media only screen and (max-width: 373px) {    
        #target, #completed{
        font-size:50px; 
        line-height: 50px;
        }
        .back-bttn {
        margin-top: 5vh;
        max-width:150px;
        font-size: 14px;
        line-height: 30px;
        }
        #resultsMag{
        width: 50%;
        margin-top: 8vh;
        }
    }
</style>

