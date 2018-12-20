<template> 
<div id="overall">
    <transition name="fade" mode="out-in" appear>
        <div v-if="showWB==0" key="one">
            <wb-check></wb-check>
        </div>
        <div v-if="(showWB==1)" key="two">
            <wb-appraisal></wb-appraisal>
        </div>
        <div v-if="(showWB==2)" key="three">
            <wb-appraisal></wb-appraisal>
        </div>
        <div v-if="(showWB==3)" key="four">
            <wb-appraisal></wb-appraisal>
        </div>
        <div v-if="showWB==4" key="five">
            <wb-experience></wb-experience>
        </div>
        <div v-if="(showWB==5)" key="six">
            <wb-appraisal></wb-appraisal>
        </div>
        <div v-if="(showWB==6)" key="seven">
            <wb-end></wb-end>
        </div>
     </transition>
</div>
</template>
<script>
    import Appraisal from './Qappraisal.vue'
    import Check from './Qcheck.vue'
    import Experience from './Qexperience.vue'
    import End from './Qend.vue'
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex'; 
    export default {
        computed: {
            ...mapGetters([
                'showWB','responseWB'
            ])
        },
        methods:{
            ...mapMutations([
                'progressBar'
            ])
        },
        components: {
            wbAppraisal: Appraisal,
            wbCheck: Check,
            wbExperience: Experience,
            wbEnd: End
        },
        mounted(){
            this.$store.commit('progressBar');
        }
    }
</script>
<style>
    #overall {
        overflow: hidden;
        margin-left: 30px;
        margin-right: 30px;
        padding-bottom: 2px;
        height: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .4s;
    }
    .fade-enter {
        opacity: 0;
        margin-top: -100%;
    }
    .fade-enter-to {
        opacity: 1;
        margin-top: 0%;
    }
    .fade-leave-to  {
        opacity: 0;
    }
    @media only screen and (min-width: 577px) and (max-width: 991px) {
        #overall {
            overflow: hidden;
            margin-left: 0px;
            margin-right: 0px;
            min-height: 550px;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
         #overall {
            overflow: hidden;
            margin-left: 0px;
            margin-right: 0px;
            min-height: 380px;
        }  
    }
    @media only screen and (max-width: 375px) {
        #overall {
            overflow: hidden; 
            margin-left: 0px;
            margin-right: 0px;
            min-height: 300px;
        }
    }
    
</style>