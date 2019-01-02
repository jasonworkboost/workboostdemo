<template>
<div>
    <router-view></router-view> 
    <cookies-wb></cookies-wb>
    <terms-wb v-if="legalWB.showTerms"></terms-wb>
    <privacy-wb v-if="legalWB.showPrivacy"></privacy-wb>
</div>
</template>

<script>
    import CookiesWb from './assets/components/home/Hcookie.vue'; 
    import TermsWb from './assets/components/Terms.vue';
    import PrivacyWb from './assets/components/Privacy.vue';
    import {mapGetters} from 'vuex';
    export default {
        components:{
            CookiesWb,
            TermsWb,
            PrivacyWb
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
