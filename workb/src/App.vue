<template>
<div>
    <router-view></router-view> 
    <cookies-wb></cookies-wb>
    <legal-wb v-if="legalWB.showLegal"></legal-wb>
</div>
</template>

<script>
    import CookiesWb from './assets/components/home/Hcookie.vue'; 
    import LegalWb from './assets/components/Legal.vue';
    import {mapGetters} from 'vuex';
    export default {
        components:{
            CookiesWb,
            LegalWb
        },
        computed:{
            ...mapGetters([
            'legalWB' 
            ]),
        },
    }
</script>
<style>
    *{
        font-family: Raleway;
    }
</style>
