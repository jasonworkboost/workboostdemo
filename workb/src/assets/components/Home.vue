<template>
<div>
    <transition name="load" mode="out-in" appear>
            <wb-loadscreen v-if="loading"></wb-loadscreen>
    </transition>
    <wb-navigation></wb-navigation>
    <wb-home></wb-home>
    <wb-divider></wb-divider>
    <wb-feature></wb-feature>
    <!-- <wb-pricing></wb-pricing> -->
    <wb-download></wb-download>
    <wb-contact></wb-contact>
    <wb-pagefooter></wb-pagefooter>
</div>  
</template>
<script>
import Navigation from './home/Hnavigation.vue';
import Home from './home/Hhome.vue';
import Divider from './home/Hdivider.vue';
import Feature from './home/Hfeature.vue';
import Pricing from './home/Hpricing.vue';
import Download from './home/Hdownload.vue';
import Contact from './home/Hcontact.vue';
import Pagefooter from './home/Hpagefooter.vue';
import Loadscreen from './question/Qloadscreen.vue'
import {mapGetters} from 'vuex';


export default {
    data(){
          return {
              loading: true
          }  
        },
    methods:{
         loader(){
                setTimeout(() => {
                    this.loading = false;
                }, 1300);
            },
    },
    computed:{
        ...mapGetters([
            'colorsWB'
        ])
        },
    components:{
        wbNavigation: Navigation,
        wbHome: Home,
        wbDivider: Divider,
        wbFeature: Feature,
        wbPricing: Pricing,
        wbDownload: Download,
        wbContact: Contact,
        wbPagefooter: Pagefooter,
        wbLoadscreen: Loadscreen,
    },
    created(){
        this.loader();
    },
}
</script>

<style lang="scss">
@import "./home/_global.scss";
// @import "./home/_variables.scss";
#home{
    background: url("../img/bgoffice.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: #fff;
    margin-top: 70px;
    width: 100%;
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
</style>

