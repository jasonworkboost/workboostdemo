<template>
<div> 
    <div class="overall row">
        <div id="number" :style="colorSet">{{numberWB}}</div>
        <div id="descrip">
            <p>{{questionWB}}</p>
            <hr :style="colorSet">
            <p>{{assignmentWB}}</p>
        </div>
    </div>
</div> 
</template>
<script>
    import {mapGetters} from 'vuex';
    
    export default{
      computed:{
            ...mapGetters([
                'numberWB','questionWB','assignmentWB','colorsWB'
            ]),
          colorSet(){
               return { 
          backgroundColor: this.colorsWB.color1, 
          borderColor: this.colorsWB.color1 
                }
            },
        }
    }
</script>
<style scoped>
    .overall {
        overflow-x: hidden;
        display: block;
        margin-left: 50%;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        margin-bottom: 20px;
        width: 100%;
    }

    div #number {
        margin-top: 20px;
        text-align: center;
/*
        margin-left: 50%;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
*/
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 10px;
        color: white;
        font-size: 250%;
        margin-bottom: 40px;
    }

    #descrip {
        color:black;
        margin-left: 0px;
    }
    
    p {
        font-size: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }
    
    hr {
        border-top: 1px solid;
    }


    @media only screen and (min-width: 577px) and (max-width: 991px) {

        .overall{
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 10px;
            border-right: none;
        }
        div #number {
            margin-top: 0px;
            margin-left: 0px;
            -webkit-transform: none;
            transform: none;
            margin-right: 0px;
            margin-bottom: 0px;
            width: 230px;
            height: 140px;
            line-height: 130px;
            font-size: 400%;
        }
        #descrip {
            margin-left: 20px;
            margin-right: 0px;
        }
        p{
            font-size: 170%;
            margin-left: 1px;
            margin-right: 0px;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
         .overall{
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 10px;
            border-right: none;
        }
        div #number {
            margin-top: 0px;
            margin-left: 0px;
            -webkit-transform: none;
            transform: none;
            margin-right: 0px;
            margin-bottom: 0px;
            width: 80px;
            height: 60px;
            line-height: 60px;
            font-size: 200%;
        }
        #descrip {
            margin-left: 20px;
            margin-right: 0px;
        }
        p{
            font-size: 90%;
            margin-left: 1px;
            margin-right: 0px;
        } 
    }
    @media only screen and (max-width: 375px) {
        .overall{
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 10px;
            border-right: none;
        }
        div #number {
            margin-top: 0px;
            margin-left: 0px;
            -webkit-transform: none;
            transform: none;
            margin-right: 0px;
            margin-bottom: 0px;
            width: 60px;
            height: 40px;
            line-height: 40px;
            font-size: 150%;
        }
        #descrip {
            margin-left: 20px;
            margin-right: 0px;
        }
        p{
            font-size: 75%;
            margin-left: 1px;
            margin-right: 0px;
        } 
        hr{
            border-top: 1px solid;
            margin-top: 0px;
            margin-bottom: 10px;
        }
    }
</style>