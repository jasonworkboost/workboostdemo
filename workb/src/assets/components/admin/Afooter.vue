<template>
 <div id="gfooteroverall" class="container">
     <div class="col-md-6 col-xs-12">
        <div style="height: 12vh; width: 280px;" @mouseleave="textshow = 'hidden'">
            <div id="loginfooterdiv" class="col-xs-6" :style="{overflowY: textshow}">
            <p id="loginfootertext" @click="textshow = 'visible'"> <span id="loginarrow" :style="{color: '#17C8BC'}">&#8595; </span>{{lang}}</p>
            <p id="loginfootertext2" 
                @click="langGetr('eng'), lang= 'English', textshow = 'hidden'">
                English</p>
            <p id="loginfootertext3"
                @click="langGet({lang:'ned'}), lang = 'Nederlands', textshow = 'hidden'"
                >Nederlands</p>
        </div>
        </div>
    </div>
    <div class="col-md-6 col-xs-12 text-right">
        <p class="wbfooter-text" style="padding-top: 10px;">{{labelsWB.footerMessage1}}</p>
        <p class="wbfooter-text">{{labelsWB.footerMessage2}}<span style="color: #3da5e5"> workboost.io</span></p><br>
    </div>
</div>
</template>
<script>
     import {mapGetters} from 'vuex';
     import {mapActions} from 'vuex';
    
    export default {
        data (){
            return{
                textshow: "hidden",
                lang: "English"
            }
        },
        computed:{
            ...mapGetters([
                'labelsWB','logosWB','colorsWB'
            ])
        },
        methods: {
            ...mapActions([
                'langGet'   
            ]),
            langGetr(a){
                const request = {
                    lang: a,  
                }
                this.langGet(request);
            }
        },
        created(){
            const request = {
                    lang: "eng",  
                }
                this.langGet(request);
        }
    }
</script>
<style scoped>
    #loginarrow{
        font-size: 20px;
    }
    #gfooteroverall{
        background-color: white;
        opacity: 1;
    }
    #loginfooterdiv{
        width: 50%;
        position: relative; 
        background-color: rgba(236, 192, 192, 0.1);
        height: 4vh;
    }
    #loginfootertext{
        color: black;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    #loginfootertext2{
        margin-top: 4vh;
        color: black;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    #loginfootertext3{
        margin-top: 8vh;
        color: black;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    #loginfootertext:hover, #loginfootertext1:hover, #loginfootertext2:hover, #loginfootertext3:hover{
        cursor: pointer;
    }
    .wbfooter-text{
        line-height: 10px;
        margin-right: 30px;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        .wbfooter-text{
        display:none;
        }
    }
    @media only screen and (min-width: 1px) and (max-width: 576px) {
        .wbfooter-text{
        display:none;
        }

    }
</style>