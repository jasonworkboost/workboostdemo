<template>
 <div>
     <div class="col-md-6">
      <div id="wb-footer-id">
       <img id="bigimage" :src="logosWB.logoBig">
       <img id="smallimage" :src="logosWB.logoSmall">
    </div>
    </div>
    <div class="col-md-6 col-xs-12 text-right">
        <p class="wbfooter-text">{{labelsWB.footerMessage1}}</p>
        <p class="wbfooter-text">{{labelsWB.footerMessage2}}<span style="color: #3da5e5">workboost.io</span></p><br>
    </div>
</div>
</template>
<script>
     import {mapGetters} from 'vuex';
    
    export default {
        computed:{
            ...mapGetters([
                'labelsWB','logosWB'
            ])
        }
    }
</script>
<style scoped>
    .wbfooter-text{
        line-height: 10px;
    }
    #bigimage {
        display:block;
        width: 170px;
        margin-left:-20px;
        margin-top: 0px;
    }
    #smallimage {
        display: none;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        .wbfooter-text{
            display: none;
        }   
        #bigimage{
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            width: 50%;
        }
    }
    @media only screen and (min-width: 1px) and (max-width: 576px) {
        .wbfooter-text{
            display: none;
        }    
        #bigimage{
            margin-left: 50%;
            -ms-transform: translate(-50%);
            -webkit-transform: translate(-50%);
            -moz-transform: translate(-50%);
            -o-transform: translate(-50%);
            transform: translate(-50%);
            width: 50%;
            margin-top:-10px;
        }
    }
</style>