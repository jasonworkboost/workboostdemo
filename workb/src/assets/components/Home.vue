<template>
<div id="home">
    <wb-hmenu></wb-hmenu>
    <wb-bodyone></wb-bodyone>
    <div class="main-wrapper">
        <cookie-law theme="base--rounded" message="WorkBoost uses cookies to ensure you get the best experience." buttonText="Got It!"></cookie-law>
  </div>
</div>  
</template>
<script>

import Menu from './home/Hmenu.vue';
import Bodyone from './home/Hbodyone.vue';
import {mapGetters} from 'vuex';
import CookieLaw from 'vue-cookie-law';


export default {
    data(){
          return {
          }  
        },
    methods:{
    },
    computed:{
            ...mapGetters([
            'colorsWB'
            ])
        },
    components:{
            wbHmenu:Menu,
            wbBodyone:Bodyone,
            CookieLaw
        },
     created(){
        },
}
</script>
<style scoped>
#home{
    position: relative;
    background-color:white;
    width: 100%;
}

.Cookie--baseee {
      background: black;
      color: yellow;
}

</style>

