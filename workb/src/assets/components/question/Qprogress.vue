<template>
<div>
    <div class="progress">
    <div class="progress-bar" :style="progressWB"></div>
    </div>
    <div class="icons">
        <div class="icon col-xs-3 text-center">
              <span :style="{backgroundColor: iconWB[0]}">S</span>
        </div>
        <div class="icon col-xs-3 text-center">
              <span :style="{backgroundColor: iconWB[1]}">1</span>
        </div>
        <div class="icon col-xs-3 text-center">
              <span :style="{backgroundColor: iconWB[2]}">2</span>
        </div>
        <div id="wb-last-icon" class="icon col-xs-3 text-center">
            <span :style="{backgroundColor: iconWB[3]}">⚑</span>
        </div>
    </div>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    
    export default {
        data() {
            return {
                steps: ['✓', '☓', '♬', '♫', '♯', '♪', '✌', '👍', '❤', '♥', '✩', '★', '❂', '☂', '☃', '⛇', '✿', '✈', '☠', '♔', '♗', '☣', '☺', '♲', '♻', '✉', '🖔', '🂿', '⛃', '⚑', '🏲', '🏆'],
            }
        },
        computed: {
            ...mapGetters([
            'showWB','progressWB','iconWB','colorsWB' 
            ]),
        },
    }
</script>
<style scoped>
    .progress {
        height: 9px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 40px;
        background-color: #f4f9f9;
        overflow: visible;
    }
    .progress-bar {
        margin-top: 0px;
    }
    .icons {
        position: relative;
        margin-left: -6%;
    }
    .icon {
        top: -45px;
    }
    span {
        color: white;
        position: absolute;
        font-size: 175%;
        height: 40px;
        width: 40px;
        border-radius: 50px;
        text-align: center;
        line-height: 40px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
        -webkit-transition: .5;
        transition: .5;
    }
    span.current {
        background-color: #17C8BC;
        border: solid white 2px;
        -webkit-box-shadow: 0px 0px 0px 1px #FFBC00;
        box-shadow: 0px 0px 0px 1px #FFBC00;
        line-height: 35px;
    }
    #wb-last-icon{
        padding-left: 40px;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        .progress {
            margin-top: 0px;
            height: 5px;
        }
        span {
            height: 50px;
            width: 50px;
            line-height: 50px;
            font-size: 200%;
        }
        .icons {
            margin-left: -7%;
        }
        span.current {
            line-height: 45px;
            border: solid white 2px;
        }
         #wb-last-icon{
        padding-left: 20px;
        }
    }
    @media only screen and (min-width: 376px) and (max-width: 576px) {
        .progress {
            margin-top: 5px;
            height: 5px;
        }
        .icons {
            margin-left: -9%;
            /*geen bolletjes, is te druk*/
            display: none; 
        }
        .icon {
            top: -37px;
        }
        span {
            height: 30px;
            width: 30px;
            line-height: 30px;
            font-size: 125%;
        }
        span.current {
            line-height: 26px;
            border: solid white 2px;
        }
         #wb-last-icon{
        padding-left: 20px;
        }
    }
    @media only screen and (max-width: 375px) {
        .progress {
            margin-top: 5px;
            height: 5px;
        }
        .icons {
            margin-left: -9%;
            /*geen bolletjes, is te druk*/
            display: none; 
        }
        .icon {
            top: -32px;
        }
        span {
            height: 20px;
            width: 20px;
            line-height: 19px;
            font-size: 80%;
        }
        span.current {
            line-height: 16px;
            border: solid white 1px;
        }
        #wb-last-icon{
        padding-left: 20px;
        }
    }
</style>