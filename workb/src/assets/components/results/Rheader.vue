<template>
    <div class="col-md-12 col-sm-12 header" id="rheadertop" :style="{backgroundColor: colorsWB.color1}">
        <div class="row" id="iconbanner">
            <img id='icons' src="../../img/Element_icons-43.png" width="150">
        </div>
        <div class="row" id="rtexttop">
            <div  class="col-md-2 col-sm-2"></div>
            <div  class="col-md-8 col-sm-8">
            <h1 id="theader">{{labelsWB.resultsHeader}}</h1> 
            </div>
            <transition name="load2" mode="out-in" appear>   
                <div class="col-md-2 col-sm-2" id="closedetails" v-if="$store.state.detailview === true" @click="$store.state.detailview = !$store.state.detailview">
                    <p id="closetext" :style="{color: colorsWB.color1}">{{labelsWB.resultsClose}}X</p>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
     computed: {
            ...mapGetters([
            'labelsWB','colorsWB' 
            ]),
        }
}
</script>
<style scoped>
    #rheadertop{
        height: 100%;
    }
    #rtexttop, #iconbanner{
        height: 50%;
        position: relative;
    }
    #icons {
        position: absolute;
        bottom: 0;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
    }
    #theader{
        font-size: 35px;
        text-align: center;
        color: white;
    }
    #closedetails{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100px;
        margin-right: 40px;
        height: 35px;
        border: 2px solid white;
        border-top-right-radius: 25px;
        border-top-left-radius: 5px;
        background-color: white;
        cursor: pointer;
    }
    #closetext {
        margin-top: 7px;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px; 
        font-stretch: expanded;
    }
    .load2-enter-active, .load2-leave-active {
    transition: all .3s;
    }
    .load2-enter {
    -ms-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 1;
    }
    .load2-enter-to {
    -ms-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -o-transform: translateY(0%);
    transform: translateY(0%);
    opacity: 1;
    }
    .load2-leave-to
    {
    opacity: 0;
    }
    @media only screen and (min-width: 577px) and (max-width: 991px){
        #closetext, #closedetails{
            display: none;
        }

    }
    @media only screen and (min-width: 1px) and (max-width: 576px) {
        #closetext, #closedetails{
            display: none;
        }
        #rtexttop, #iconbanner{
        height: 50%;
        position: relative;
        }
        #rheadertop{
        height: 89%;
        }
        #icons{
            height: 30px;
            width: 120px;
        }
        #theader{
            font-size: 30px;
            margin-top: 10px;
        }
    }

</style>

