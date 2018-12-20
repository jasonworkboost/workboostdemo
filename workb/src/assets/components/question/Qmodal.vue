<template> 
<transition name="modal">
 <div class="modal modal-mask" style="display: block">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        {{modalWB.modalHeader}}
      </div>
      
      <div class="modal-body">
         {{modalWB.modalBody}}
         <br>
         <br>
         <input type="number" 
            class="form-control" 
            v-model="snr"
            :placeholder="modalWB.modalPlaceholder"
            :style="{borderColor: focusColor}" 
            @focus="focusColor=colorsWB.color1" 
            @blur="focusColor='#f9f9f9'"> 
      </div>
      
      <div class="modal-footer">
            <button type="button" 
            class="btn btn-primary" 
            @click="sciencenrProvide({nr: snr})"
            :style="{backgroundColor: colorsWB.color1, borderColor:colorsWB.color1, borderRadius: 10+'px'}">
            {{modalWB.modalButton}}
            </button>
        </div>
    </div>
  </div>
</div>
</transition> 
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex' 

export default {
    data(){
        return{
            focusColor:'#f9f9f9',
            snr: ''
        }
    },
    methods:{
         ...mapActions([
                'sciencenrProvide'   
            ]),
    },
    computed: {
            ...mapGetters([
            'modalWB','colorsWB' 
            ]), 
    }
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
</style>

