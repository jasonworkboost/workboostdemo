<template>
<nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" @click="col = !col">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
      <a class="navbar-brand">WorkBoost</a>
    </div>
    <div class="collapse navbar-collapse" :class="{ in: col }">
      <ul class="nav navbar-nav navbar-right text-uppercase" @click="col = !col">
        <li><a @click: v-scroll-to="'#home'" >Home</a></li>
        <li><a @click: v-scroll-to="'#feature'">Features</a></li>
        <li><a @click: v-scroll-to="'#pricing'">Pricing</a></li>
        <li><a @click: v-scroll-to="'#download'">Download</a></li>
        <li><a @click: v-scroll-to="'#contact'">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
  
</template>
<script>
export default {
  data(){
    return{
      col: false
    }
  }
    
}
</script>
<style>

</style>
