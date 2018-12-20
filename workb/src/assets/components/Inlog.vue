<template>
    <div>
        <wbLfooter id="loginfooter"></wbLfooter>
        <wbLmain id="loginmain"></wbLmain>
    </div>
</template>

<script>
    import Lmain from './login/Lmain.vue';
    import Lfooter from './login/Lfooter.vue';
    import {mapGetters} from 'vuex'; 

    
     export default {
        components:{
            wbLmain: Lmain,
            wbLfooter:Lfooter,
        },
    }
</script>
<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
    #loginmain{
        height: 80vh;
    }
    #loginfooter{
        margin-top: 2vh;
        height: 12vh;
        overflow: hidden;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        #loginfooter{
        height: 12vh;
        }
    }
    @media only screen and (min-width: 1px) and (max-width: 576px) {
        #loginfooter{
        height: 14vh;
        }
    }
</style>