<template>
<div class="container">
    <transition name="load" mode="out-in" appear>
    <wb-loadscreen v-if="loading"></wb-loadscreen>
    </transition>
    <transition name="load" mode="out-in" appear>
    <wb-modal v-if="scienceModeWB.scienceMode"></wb-modal>
    </transition>
    <div class="spacerrr"></div>
       <div class="row blok">
           <div  id="blok1" class="blok col-md-2 col-xs-12">
               <wb-logo></wb-logo>
           </div>
           <div class="blok col-md-10 col-xs-12"> 
               <wb-progress></wb-progress>
           </div>
       </div>
    <div class="row spacerrr2"></div>
       <div class="row blok2">
           <div id="blok3" class="col-md-2 col-xs-12">
               <wb-qena></wb-qena>
           </div>
           <div id="blok4" class="blok2 col-md-10 col-xs-12">
               <wb-main></wb-main>
           </div>
       </div>
       <div id="question-footer" class="row col-md-12 col-xs-12">
           <hr id="color-line">
            <wb-footer></wb-footer>  
       </div>
</div>
</template>

<script>
    import Progress from './question/Qprogress.vue'
    import Logo from './question/Qlogo.vue'
    import Qena from './question/Qqena.vue'
    import Main from './question/Qmain.vue'
    import Footer from './question/Qfooter.vue'
    import Loadscreen from './question/Qloadscreen.vue'
    import Modal from './question/Qmodal.vue'

    import {mapGetters} from 'vuex';
    
    export default {
        data(){
            return{
                loading: true,
            }
        },
        methods:{
            loader(){
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            },
        },
        components:{
            wbProgress: Progress,
            wbLogo:Logo,
            wbQena:Qena,
            wbMain:Main,
            wbFooter:Footer,
            wbLoadscreen: Loadscreen,
            wbModal: Modal,
        },
        computed:{
            ...mapGetters([
            'scienceModeWB','showWB' 
            ]),
        },
        created(){
          this.loader();
        },
        beforeRouteLeave(to, from , next) {
            this.$store.dispatch('resetState');
            next();
            // if (this.showWB === 6) { HAVE TO DO IT WITH A MODAL BECAUSE OF POPUPBLOCKERS
            //     this.$store.dispatch('resetState')
            //     next()
            // } else {
            //     const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
            //     if (answer == true) {
            //        this.$store.dispatch('resetState')
            //        next()
            //     } else {
            //         next(false)
            //     }
            // } 
        }
    }
    
</script>
<style>
    #color-line {
        color: #17C8BC;
    }
    body {
        overflow-x: hidden;
    }
    .container {
        height: 100vh;
        overflow-x: hidden;
    }
    .spacerrr{
        height: 5%;
    }
    .spacerrr2{
        height: 10%;
    }
    #blok3{
        height: 100%;
    }
    #blok4{
       min-height: 55vh;
    }
    #question-footer{
        margin-top: 8vh;
    }
    .blok{
        height:80px;       
    }
    .blok2{
        min-height: 400px;
    }
    .load-enter-active, .load-leave-active {
        transition: all .5s;
    }
    .load-enter {
        opacity: 1;
    }
    .load-enter-to {
        opacity: 1;
    }
    .load-leave-to
        {
        opacity: 0;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        #blok4{
            min-height: 57vh;
        }
        #blok1{
            display: none;
        }
        .blok{
        height:0px;       
        }
        .container{ 
            width:100%;
        }
        #blok3{
        height: 170px;
        margin-bottom: 100px;
        }
        .spacer{
        min-height: 60px;
        background-color: white;
        }
    }     
    @media only screen and (min-width: 359px) and (max-width: 576px) {
        #blok1{
            display: none;
        }   
        .container{ 
            width:100%;
        }
        .blok{
        height:0px;       
        }
        .blok2 {
            min-height:340px;
        }
        .spacer{
        height: 30px;
        background-color: white;
        }
        .spacer2{
        max-height: 60px;
        background-color: white;
        }
         #question-footer{
        margin-top: -20px;
        margin-left: 0px;
        }
        #blok3{
            margin-bottom: 20px;
        }
    }
    @media only screen and (max-width: 359px) {
         #blok1{
            display: none;
        }
        .container{ 
            width:100%;
        }
        .blok{
        height:0px;       
        }
        .blok2 {
            min-height:280px;
        }
        .spacer{
        height: 30px;
        background-color: white;
        }
        .spacer2{
        max-height: 40px;
        background-color: white;
        }
        #question-footer{
        margin-top: 2vh;
        margin-left: 0px;
        }
        #blok3{
            margin-bottom: 0px;
        }        
        .spacerrr{
        height: 20px;
        background-color: white;
        }
        .spacerrr2{
        height: 30px;
        background-color: white;
        }
    }
</style>
