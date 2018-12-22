<template>
    <div>
        <wbLfooter id="adminfooter"></wbLfooter>
        <wbLmain id="adminmain"></wbLmain>
    </div>
</template>

<script>
    import Amain from './admin/Amain.vue';
    import Afooter from './admin/Afooter.vue';
    import {mapGetters} from 'vuex'; 

    
     export default {
        components:{
            wbLmain: Amain,
            wbLfooter:Afooter,
        },
    }
</script>
<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
    #adminmain{
        height: 80vh;
    }
    #adminfooter{
        margin-top: 2vh;
        height: 12vh;
        overflow: hidden;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        #adminfooter{
        height: 12vh;
        }
    }
    @media only screen and (min-width: 1px) and (max-width: 576px) {
        #adminfooter{
        height: 14vh;
        }
    }
</style>