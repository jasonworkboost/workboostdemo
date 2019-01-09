<template>
  <section id="legal">
    <wb-lclose></wb-lclose>
    <div class="container">
     <wb-lprivacy v-if="legalWB.showPrivacy"></wb-lprivacy> 
     <wb-lterms v-if="legalWB.showTerms"></wb-lterms>
    </div>
  </section>
</template>
<script>
import wbLclose from "./legal/Lclose.vue";
import wbLterms from "./legal/Lterms.vue";
import wbLprivacy from "./legal/Lprivacy.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    wbLclose,
    wbLterms,
    wbLprivacy
  },
  computed:{
            ...mapGetters([
            'legalWB' 
            ]),
        },
};
</script>

<style lang="scss">
#legal {
  position: absolute;
  top: -60px;
  left: 0;
  right: 0px;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}

</style>

