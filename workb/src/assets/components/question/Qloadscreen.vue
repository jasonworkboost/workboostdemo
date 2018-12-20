<template>
<div class="loader">
    <div id="containerload">
        <div class="loadingtitle"><p>Loading...</p></div>
        <div class="item item-1" :style="{backgroundColor: colorsWB.color1}"></div>
        <div class="item item-2" :style="{backgroundColor: colorsWB.color2}"></div>
        <div class="item item-3" :style="{backgroundColor: colorsWB.color3}"></div>
        <div class="item item-4" :style="{backgroundColor: colorsWB.color4}"></div>
    </div>
</div>
</template>
<script>
 import {mapGetters} from 'vuex';

    export default{
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters([
            'colorsWB' 
            ]),
        },
    }
</script>
<style scoped>


#containerload {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.loader{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999;
    background-color: white;
}

.loadingtitle{
    margin-top:-50px;
    color: black;
}

.item {
  width: 50px;
  height: 50px;
  position: absolute;
}

.item-1 {
  background-color: #FA5667;
  top: 0;
  left: 0;
  z-index: 1;
  animation: item-1_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

.item-2 {
  background-color: #7A45E5;
  top: 0;
  right: 0;
  animation: item-2_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

.item-3 {
  background-color: #1B91F7;
  bottom: 0;
  right: 0;
  z-index: 1;
  animation: item-3_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

.item-4 {
  background-color: #FAC24C;
  bottom: 0;
  left: 0;
  animation: item-4_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

@keyframes item-1_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(0, 50px)} 
  50% {transform: translate(50px, 50px)} 
  75% {transform: translate(50px, 0)} 
}

@keyframes item-2_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(-50px, 0)} 
  50% {transform: translate(-50px, 50px)} 
  75% {transform: translate(0, 50px)} 
}

@keyframes item-3_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(0, -50px)} 
  50% {transform: translate(-50px, -50px)} 
  75% {transform: translate(-50px, 0)} 
}

@keyframes item-4_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(50px, 0)} 
  50% {transform: translate(50px, -50px)} 
  75% {transform: translate(0, -50px)} 
}

@media only screen and (max-width: 375px){ 


}
</style>

