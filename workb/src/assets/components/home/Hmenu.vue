<template>
    <div class="navbar-fixed-top">
        <div class="container">
            <div class="row header vcenter">
                <div class="col-xs-6 menu">
                    <img alt="Brand" src="\src\assets\img\logoBigWB.png" height="40">
                </div>
                <div class="col-xs-3 col-xs-offset-3 menu" :class="{twist:show}" @click="show=!show">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="row menuselect">
            <transition name="show" appear>
                <ul v-if="show" class="list-group menuitems">
                    <li class="list-group-item">Why?</li>
                    <li class="list-group-item">What?</li>
                    <li class="list-group-item">WorkBoost Corporate</li>
                    <li class="list-group-item">WorkBoost Science</li>
                    <li class="list-group-item">About</li>
                    <li class="list-group-item"><a href="https://workboost.me">Request a demo</a> if you want to try it for yourself</li>
                </ul>
             </transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return{
                show: false
            }
        },
        
    }
</script>
<style>
.header {
    height: 80px;
    background-color: rgba(255,255,255,1)  
}
li{
    list-style: none;
}
.menu{
    height: 40px;
    margin-top: 20px;
}
.menuitems{
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,.5) 
}
.menuselect{
    overflow-x: hidden;
}
.menu span{
    width: 30px;
    height: 1px;
    background: #9b9b9b;
    position: absolute;
    right: 30px;
    transition: all .3s;
}

.twist span {
    background:#fc4a1a;
    transform: rotate(150deg);
}

.menu span:nth-child(1){
  top: 10px;
}

.menu span:nth-child(2){
  top: 20px;
}

.menu span:nth-child(3){
  top: 30px;
}

.show-enter-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);;
}
.show-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.show-enter, .show-leave-to{
  transform: translateX(100%);
  opacity: 0;
}

</style>
