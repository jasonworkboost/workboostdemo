<template>
<nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
      <a href="#" class="navbar-brand">WorkBoost</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right text-uppercase">
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
    
}
</script>
<style>

</style>
