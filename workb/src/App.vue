<template>
<div>
    <router-view></router-view> 
    <cookies-wb></cookies-wb>
</div>
</template>

<script>
    import CookiesWb from './assets/components/home/Hcookie.vue' 
    export default {
        components:{
            CookiesWb
        }
    }
</script>
<style>
    *{
        font-family: Raleway;
    }
</style>
