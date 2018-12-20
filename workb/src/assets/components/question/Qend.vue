<template>
<div>
   <div>
    <div class="col-md-12 col-xs-12 text-center">
            <h1 id="succes">{{labelsWB.succesMessage}} <span :style="{color:colorsWB.color1}">#{{numberWB}}</span>!</h1>
    </div>
    <div class="col-md-4 col-md-offset-1 col-sm-5">
            <h3 id="funfact">{{labelsWB.funfactMessage}}</h3>
    </div>
    <div class="col-md-10 col-md-offset-1 col-xs-12 text-center">
            <h3 id="curious-fact" :style="{color:colorsWB.color2}">"{{curiousFactWB}}"</h3>
    </div>
    <div class="col-md-12 col-xs-12 text-center">
            <p id="closing">{{labelsWB.closeMessage}}</p>
    </div>
     <div class="close-bttn col-md-2 col-md-offset-5 col-xs-6 col-xs-offset-3 text-centered"
        ontouchstart=""
        @click.prevent="
            hoverColor1 = 'white'; 
            textColor1 = 'black';
            linkThrough();" 
        :style="{backgroundColor: hoverColor1, borderColor: colorsWB.color1, color: textColor1}" 
        @mouseover="hoverColor1 = colorsWB.color1; textColor1 = 'white';" 
        @mouseleave="hoverColor1 = 'white'; textColor1='black'">{{labelsWB.closePage}}</div>
    </div>
</div>
</template>
<script>
    import {mapGetters} from 'vuex';
    
    export default {
        data (){
            return{
                hoverColor1:"white",
                textColor1: "black"
            }
        },
        computed:{
            ...mapGetters([
                'labelsWB','numberWB','curiousFactWB','colorsWB'
            ])
        },
        methods:{
            linkThrough(){
                const self = this;
                setTimeout(function(){
                    self.$router.push({ path: '/'});
                }, 300)
            }
        }
    }
</script>
<style>
    #curious-fact {
        font-style: italic;
        font-weight: 600;
        padding-bottom: 40px;
    }
    #succes {
        margin-bottom: 60px;
        font-weight:700;
    }
    .close-bttn {
        text-align: center;
        margin-top: 30px;
        border-radius: 15px;
        font-size: 16px;
        line-height: 36px;
        border-width: 2px;
        border-style: solid;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }
    .close-bttn:hover {
        cursor: pointer;
    }
    .close-bttn:active{
        -ms-transform: translateY(1px);
        -webkit-transform: translateY(1px);
        -moz-transform: translateY(1px);
        -o-transform: translateY(1px);
        transform: translateY(1px);
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3);
    }
    #closing{
        margin-top: -2px;
    }
    @media only screen and (min-width: 577px) and (max-width: 991px) {
        #curious-fact {
            font-size:250%;
            padding-bottom: 80px;
            padding-top: 50px;
        }
        #succes {
            font-size: 275%;
            margin-bottom: 25px;
        }
        #closing{
            font-size: 125%;  
        }
        #funfact{
            font-size: 200%;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
        #curious-fact {
            font-size:150%;
            padding-bottom: 45px;
            padding-top: 5px;
        }
        #succes {
            font-size: 230%;
            margin-bottom: 25px;
        }
        #closing{
          font-size: 85%; 
          margin-top: -10px; 
        }
        #funfact{
            margin-top: 0px;
            font-size: 150%;
        }
        .close-bttn {
        text-align: center;
        background-color: white;
        color: black;
        margin-top: 20px;
        border-radius: 15px;
        font-size: 12px;
        line-height: 24px;
        border-width: 2px;
        border-style: solid;
        }
    }
    @media only screen and (max-width: 375px) {
        #curious-fact {
            font-size:120%;
            padding-bottom: 20px;
            padding-top: 0px;
            margin-top: 1vh;
        }
        #succes {
            font-size: 150%;
            margin-bottom: 20px;
            margin-top: calc(-2px + 1vh);
        }
        #closing{
          font-size: 70%;
          margin-top: 0px;  
        }
        #funfact{
            margin-top: 0px;
            font-size: 100%;
        }
        .close-bttn {
        text-align: center;
        background-color: white;
        color: black;
        margin-top: 20px;
        border-radius: 15px;
        font-size: 12px;
        line-height: 24px;
        border-width: 2px;
        border-style: solid;
        }    
    }
</style>