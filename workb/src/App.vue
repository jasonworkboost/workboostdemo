<template>
<div>
    <router-view></router-view> 
    <div class="main-wrapper">
        <cookie-law theme="base--rounded" message="WorkBoost uses cookies to ensure you get the best experience." buttonText="Got It!"></cookie-law>
  </div>
</div>
</template>

<script>
    import CookieLaw from 'vue-cookie-law';
    export default {
        data() {
            return {
            }
        },
        components:{
            CookieLaw
        }
    }
</script>
<style>
    *{
        font-family: Raleway;
    }

</style>
