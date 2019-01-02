<template>
<footer>
  <div class="container">
    <div class="row">
      <a v-scroll-to="'#home'" @click="openPrivacy()">Privacy</a>
      <a v-scroll-to="'#home'" @click="openTerms()">Terms</a>
      <p>Copyright © 2019 WorkBoost</p>
    </div>
  </div>
</footer>    
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(['openPrivacy','openTerms'])
  }
};
</script>
<style>

</style>

