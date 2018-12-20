<template>
<div>
    <div id="gbodybody" style="backgroundColor: white;"> 
        <div class="container">
            <wb-ginfo class="col-sm-12"></wb-ginfo>
            <wb-gdata class="col-sm-12"></wb-gdata>
        </div>
    </div>
</div>
</template>
<script>
import Gdata from './charts/GRdata.vue'
import Ginfo from './charts/GRinfo.vue'
import {mapGetters} from 'vuex';

export default {
     components: {
    wbGdata: Gdata,
    wbGinfo: Ginfo,
     },
     computed:{
            ...mapGetters([
            'colorsWB'
            ])
        },
}
</script>
<style>
#gbodybody{
    height: 73vh;
}
</style>
