<template>
<div id="home">
    <wb-hmenu></wb-hmenu>
    <wb-bodyone></wb-bodyone>
</div>  
</template>
<script>

import Menu from './home/Hmenu.vue';
import Bodyone from './home/Hbodyone.vue';
import {mapGetters} from 'vuex';


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

