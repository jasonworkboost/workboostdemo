<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3 col-xs-12">
        <img src="../../img/logoBigWB.png" id="bigimage">
    </div>
    <div class="spacerDiv2"></div>
    <div class="row" style="margin: auto">
      <div class="col-md-6 col-md-offset-3 col-xs-12">
        <form>
          <div class="form-group">
            <div class="pathClip">
              <p :style="{marginTop: mAni1 + 'px'}">{{startScreen.popTexte}}</p>
            </div>
            <div class="spacerDiv3"></div>
            <input
              type="text"
              class="form-control"
              id="eventID"
              name="wbevent"
              @keyup.enter="submitPress"
              :placeholder="startScreen.placeholderEvent"
              v-model="event"
              @focus="mAni1 = 0, 
                    mAni2 = 50, 
                    response= ''"
              @blur="mAni1 = 50"
            >
          </div>
          <div class="form-group">
            <div class="pathClip">
              <p :style="{marginTop: mAni2 + 'px'}">{{startScreen.popTextc}}</p>
            </div>
            <div class="spacerDiv3"></div>
            <input
              type="text"
              class="form-control"
              id="cardID"
              name="wbcard"
              @keyup.enter="submitPress"
              :placeholder="startScreen.placeholderCard"
              v-model="nr"
              @focus="mAni1 = 50, 
                    mAni2 = 0, 
                    response= ''"
              @blur="mAni2 = 50"
            >
          </div>
        </form>
      </div>
    </div>
    <div class="spacerDiv"></div>
    <div class="col-md-6 col-md-offset-3 col-xs-12">
      <div class="row" style="margin: auto">
        <div class="btnColor" ontouchstart @click="submitPress">{{startScreen.buttonContinue}}</div>
      </div>
    </div>
    <div class="col-xs-12">
      <h1 class="text-center">{{startScreen.valCheck}}</h1>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mAni1: 50,
      mAni2: 50,
      event: "",
      nr: ""
    };
  },
  computed: {
    ...mapGetters(["startScreen"])
  },
  methods: {
    submitPress() {
      const request = {
        event: this.event,
        nr: this.nr
      };
      if (request.nr == 999) {
        this.$store.dispatch("importResult", request);
      } else {
        this.$store.dispatch("importContent", request);
      }
    }
  }
};
</script>
<style scoped>
.container {
  overflow-x: visible;
}
.spacerDiv {
  height: 10%;
  width: 100%;
}
.spacerDiv2 {
  height: 10%;
}
.spacerDiv3 {
  height: 100px;
}
body {
  height: 100vh;
  width: 100vw;
}
.btnColor {
  color: white;
  text-align: center;
  font-size: 225%;
  line-height: 225%;
  background-color: #17c8bc;
  border-radius: 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}
.btnColor:hover {
  cursor: pointer;
}
.btnColor:active {
  -ms-transform: translateY(1px);
  -webkit-transform: translateY(1px);
  -moz-transform: translateY(1px);
  -o-transform: translateY(1px);
  transform: translateY(1px);
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
}
input {
  border-radius: 20px;
  background-color: white;
}
.container {
  height: 100vh;
  background-color: white;
}
#eventID,
#cardID {
  text-align: center;
  font-size: 300%;
  height: 100%;
}
#eventID,
#cardID {
  border: 2px solid #17c8bc;
}
#bigimage {
  margin-left: 50%;
  -ms-transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -moz-transform: translate(-50%);
  -o-transform: translate(-50%);
  transform: translate(-50%);
  width: 100%;
}
.pathClip {
  margin: 30px;
  width: 500px;
  height: 50px;
  background-color: white;
  overflow: hidden;
  position: absolute;
  text-align: left;
}
p {
  color: black;
  font-size: 175%;
  -ms-transition: 0.2s;
  -webkit-transition: 0.2s; /* For Safari 3.1 to 6.0 */
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
h1 {
  font-size: 225%;
}
@media only screen and (min-width: 576px) and (max-width: 991px) {
  .container {
    overflow-x: hidden;
  }
  .spacerDiv {
    height: 12%;
  }
  .spacerDiv2 {
    height: 18%;
  }
  .spacerDiv3 {
    height: 90px;
  }
  #eventID,
  #cardID {
    font-size: 400%;
    height: 400%;
    border-radius: 25px;
  }
  #eventID,
  #cardID {
    border: 2px solid #17c8bc;
  }
  .btnColor {
    font-size: 275%;
    border-radius: 25px;
  }
  .pathClip {
    margin: 20px;
    height: 40px;
  }
  p {
    color: black;
    margin-left: 2px;
    font-size: 200%;
    -ms-transition: 0.2s;
    -webkit-transition: 0.2s; /* For Safari 3.1 to 6.0 */
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  h1 {
    font-size: 250%;
  }
}
@media only screen and (min-width: 376px) and (max-width: 576px) {
  .container {
    overflow-x: hidden;
  }
  .spacerDiv {
    height: 12%;
  }
  .spacerDiv2 {
    height: 15%;
  }
  .spacerDiv3 {
    height: 60px;
  }
  #eventID,
  #cardID {
    font-size: 200%;
    height: 200%;
    border-radius: 12px;
  }
  #eventID,
  #cardID {
    border: 2px solid #17c8bc;
  }
  .btnColor {
    font-size: 175%;
    border-radius: 12px;
  }
  .pathClip {
    margin: 10px;
    height: 40px;
  }
  p {
    color: black;
    margin-left: 2px;
    font-size: 125%;
    -ms-transition: 0.2s;
    -webkit-transition: 0.2s; /* For Safari 3.1 to 6.0 */
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  h1 {
    font-size: 200%;
  }
}
@media only screen and (max-width: 375px) {
  .container {
    overflow-x: hidden;
  }
  .spacerDiv {
    height: 10%;
  }
  .spacerDiv2 {
    height: 10%;
  }
  .spacerDiv3 {
    height: 50px;
  }
  #eventID,
  #cardID {
    font-size: 180%;
    height: 180%;
    border-radius: 12px;
  }
  #eventID,
  #cardID {
    border: 2px solid #17c8bc;
  }
  .btnColor {
    font-size: 170%;
    border-radius: 12px;
  }
  .pathClip {
    margin: 10px;
    height: 40px;
  }
  p {
    color: black;
    margin-left: 2px;
    font-size: 120%;
    -ms-transition: 0.2s;
    -webkit-transition: 0.2s; /* For Safari 3.1 to 6.0 */
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  h1 {
    font-size: 150%;
  }
}
</style>