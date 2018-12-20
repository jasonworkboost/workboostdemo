<template>
<div id="resultoverall" :style="{backgroundColor: colorsWB.color1}"> 
    <div :style="{backgroundColor: colorsWB.color1}" id="topbanner">
        <transition name="load" mode="out-in" appear>
            <wb-loadscreen v-if="loading"></wb-loadscreen>
        </transition>
        <div class="container" id="contain1">
            <div class="col-sm-12"></div>
                <wb-rheader></wb-rheader>
        </div>
    </div> 
        <div id="contain3">
            <transition name="load2" mode="out-in" appear>    
                <div class="container" v-if="$store.state.detailview === false" key="nodetail">
                    <div class="col-md-12 col-sm-12" id="spaceme2"></div>
                        <wb-rbody class="bodycontent"></wb-rbody>
                    <div class= "col-md-12 col-sm-12"></div>
                </div> 
                <div v-if="$store.state.detailview === true" key="detail">
                        <wb-rgraph></wb-rgraph>
                </div>
            </transition>       
        </div>
    <div id="contain2"> 
        <div class="container">
            <wb-rfooter></wb-rfooter>
        </div>
    </div>
</div>   
</template>
<script>
 
import Header from './results/Rheader.vue'
import Body from './results/Rbody.vue'
import Footer from './results/Rfooter.vue'
import Loadscreen from './question/Qloadscreen.vue'
import Rgraph from './results/Rgraph.vue'
import {mapGetters} from 'vuex';

export default {
    data(){
            return{
                loading: true,
                refresh: false,
            }
        },
    methods:{
            loader(){
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            },
            refreshResults(){
               setTimeout(() => {
                    if (this.refresh) {
                        const a = {event: this.$store.state.event}; 
                        this.$store.dispatch('refreshResult', a);
                        this.refreshResults();
                    } else clearTimeout();
                }, 20000); 
            }
        },
    computed:{
            ...mapGetters([
            'colorsWB'
            ])
        },
    components:{
            wbRheader:Header,
            wbRbody:Body,
            wbRfooter:Footer,
            wbLoadscreen: Loadscreen,
            wbRgraph: Rgraph
        },
    created(){
          this.refresh = true;
          this.loader();
          this.refreshResults();
        },
    beforeRouteLeave(to, from , next) {
        this.refresh = false;
        this.$store.dispatch('resetState');
        next();
        }
}
</script>
<style>
    #resultoverall{
        overflow: hidden;
    }
    #topbanner {
        height: 18vh;
    }
    #contain1{
        height: 18vh;
        overflow: hidden;
    }
    #contain3{
        height: 73vh;
    }
    #contain2{
        width: 100%;
        padding-top: 10px;
        height: 9vh;
        background-color: white;
    }
    #spaceme2 {
        padding-top: 10vh;
    }
    .bodycontent{
        height: 80%;
    }
    .load-enter-active, .load-leave-active {
    transition: all .5s;
    }
    .load-enter {
    opacity: 1;
    }
    .load-enter-to {
    opacity: 1;
    }
    .load-leave-to
    {
    opacity: 0;
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
        #contain1{
        height: 18vh;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
        .container{
            overflow: hidden;
        }
        #contain2{
            margin-top: 20px;
            overflow: hidden;
        }
        #contain1{
            height: 20vh;
        }
        #contain3{
            height: 69vh;
        }
    }   
    @media only screen and (max-width: 375px) {  
        .container{
            overflow: hidden;
        } 
        #contain2{
        margin-top: 20px;
        overflow: hidden;
        }
        #contain1{
            height: 20vh;
        }
        #contain3{
            height: 69vh;
        }    
    }
</style>
