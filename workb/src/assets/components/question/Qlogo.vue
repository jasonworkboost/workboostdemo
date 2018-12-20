<template>
  <div>
   <img :src="logosWB.logoSmall">
   </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    
    export default {
        computed: {
            ...mapGetters([
                'logosWB'
            ])
        
        }
    }
</script>
<style scoped>
    div {
     text-align:  right;
    float: left;
    }
    img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 80px;
    }
    
</style>