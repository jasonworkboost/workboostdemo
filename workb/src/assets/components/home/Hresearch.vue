<template>
  <section id="research">
    <!-- <div class="container">
      <div class="row center">
        <div class="col-md-12 text-center"></div>
      </div>
    </div> -->

    <div class="container">
      <div class="row">
        <div class="col-md-5 col-xs-12">
          <h1 class="f-descrip">
            <span style="color: #fc4a1a; font-weight: 500;">Drive&nbsp;</span>research for the future.</h1>
          <p>The succes of your strategy depends on employees who understand, remember, and are energized to pursue your strategic goals on a day to day basis.</p> 
          <p>At WorkBoost we are dedicated to the application of the behavioral sciences for strategic management.</p>
          <p>Curious how we can help you integrate a realistic model of human behavior into your strategie? </p>
        </div>
        <div class="col-md-7 col-xs-12">
          <svg viewBox="0 100 863.000000 1100.000000" preserveAspectRatio="xMidYMid meet" style="position: absolute;">
            <g transform="translate(100, 650) scale(2,2) rotate(-70, 1, 100)" fill="none" stroke="rgba(255, 187, 0)">
              <path
                stroke-width="6"
                d="M193.14593579797955,363.59171486655174 C369.8279140454988,307.60358528342596 416.19299588858644,219.37132015089384 398.04387329067833,122.63267580957648 C379.89475069277023,25.894031057757864 189.11035236525888,-17.76948060155364 95.29856460852872,17.298704066259866 C1.486777161543694,52.366888589324006 115.90758748874586,135.9938763082262 42.16285718073018,219.35578603861055 C-31.581872127285493,302.7176952514928 16.46395806796248,419.5798449321753 193.14593579797955,363.59171486655174 Z"
                transform="translate(194.032601, 187.165872) rotate(-1.000000) translate(-194.032601, -187.165872) "
              ></path>
            </g>
          </svg>
          <div class="row">
            <div class="col-md-6 col-xs-12 f-feature">
              <div class="item1 features" id="i1">
                <h3 class="text-left">Keep it simple</h3>
                <p
                  class="text-left"
                >WorkBoost helps you create strategy that employees at every level of the organization can understand, communicate, and remember.</p>
              </div>
              <div class="item1 features" id="i2">
                <h3 class="text-left">Set priorities</h3>
                <p
                  class="text-left"
                >Use WorkBoost to translate your strategy into strategic priorities that provide concrete guidelines for day to day decisions while also maintaining flexibility.</p>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="item1 features" id="i3">
                <h3 class="text-left">Engagement</h3>
                <p
                  class="text-left"
                >Use WorkBoost to strengthen employees’ focus on key behaviors, as well as increase engagement and commitment to strategic goals.</p>
              </div>
              <div class="item1 features" id="i4">
                <h3 class="text-left">Use metrics</h3>
                <p
                  class="text-left"
                >The WorkBoost-app provides real-time key insights into employee behaviors and motivation that help you fine tune your strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
        <div class="col-md-12">
          <p class="text-justify">
            WorkBoost has successfully helped a multitude of organizations in simplifying their strategies. These results strengthen our beliefs that we are on the right path to change the way organizations design and deploy strategy. Are you interested how WorkBoost can help you translate your strategy into results? Send us a message and lets discuss!
            The WorkBoost app is highly customizable progressive web-application and incorporates principles of corporate nudging and gamification to gather key metrics and feedback.
            We closely collaborate with leading universities to refine and extend our knowledge on how organizations can effectively turn strategy into results. See
            <a
              href="#"
            >forScience</a> for more information.
            WorkBoost is highly empirical; we integrate state of the art insights of the managerial and behavioral sciences in our methods, and test our methods before they are scaled up
          </p>
        </div>
    </div>-->
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">

h3 {
  color:white;
  margin-top: 7px;
}

.item1 {
  padding: 1rem;
  position: relative;
  margin-left: 0px;
  height: 23rem;
  background-color: rgb(23, 200, 188);
  color: white;
  border-top-left-radius: 90px;
  border-bottom-right-radius: 90px;
  border-bottom-left-radius: 25px;
}

.item1:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  content: "";
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  float: left;
  margin: 0 1.5rem 0.75rem 0;
  color: white;
  background: rgb(23, 200, 188);
  text-shadow: 0 0 2px rgb(23, 200, 188);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  shape-outside: ellipse();
  z-index: 2;
  position: relative;
}

.item1#i1:before {
  content: "\f77c";
}
.item1#i2:before {
  content: "\f0cb";
}
.item1#i3:before {
  content: "\f1d8";
}
.item1#i4:before {
  content: "\f200";
}

.vcenter {
  display: flex;
  align-items: center;
}

.features {
  margin-bottom: 35px;
  cursor: pointer;
}

.f-feature {
  margin-top: 75px;
}

.f-descrip{
  margin-top: 130px;
}
.f-descrip:before{
    content: "";
    position: absolute;
    background-color: #17c8bc;
    top: 90px;
    left: 15px;
    height: 10px;
    width: 130px;
}
</style>
