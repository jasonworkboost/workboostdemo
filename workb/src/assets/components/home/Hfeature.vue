<template>
  <section id="feature">
    <div class="container">
      <div class="row center">
        <div class="col-md-12 text-center">
          <h4 class="text-uppercase" style="color: #75808;">how we contribute</h4>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row center">
        <div class="col-md-6 item1" id="i1">
          <h3 class="text-uppercase text-left">Keep it simple</h3>
          <p
            class="text-justify"
          >Strategy is often complex, but to propel your business forward requires simplicity. WorkBoost centers on helping you create strategy that is simple enough for employees at every level of the organization to understand, communicate, and remember.</p>
        </div>
        <div class="col-md-6 text-center">
          <i class="fas fa-baby icon-des"></i>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row center">
        <div class="col-md-6 text-center">
          <i class="fas fa-list-ol icon-des"></i>
        </div>
        <div class="col-md-6 item1" id="i2">
          <h3 class="text-uppercase text-left">Set priorities</h3>
          <p
            class="text-justify"
          >Strategic priorities provide concrete guidelines for day to day decisions while also maintaining flexibility. Our step by step method translates your strategy into a set of strategic priorities.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row center">
        <div class="col-md-6 item1" id="i3">
          <h3 class="text-uppercase">Foster engagement</h3>
          <p
            class="text-justify"
          >Without employee engagement your strategy can not convert. We have created the WorkBoost app to strengthen employees’ focus on key behaviors, as well as increase engagement and commitment to strategic goals.</p>
        </div>
        <div class="col-md-6 text-center">
          <i class="fab fa-telegram-plane icon-des"></i>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row center">
        <div class="col-md-6 text-center">
          <i class="fas fa-chart-pie icon-des"></i>
        </div>
        <div class="col-md-6 item1" id="i4">
          <h3 class="text-uppercase">Monitor and iterate</h3>
          <p
            class="text-justify"
          >WorkBoost is highly empirical; we integrate state of the art insights of the managerial and behavioral sciences in our methods, and test our methods before they are scaled up.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- <h2 class="text-uppercase">Title 5</h2> -->
          <p class="text-justify">
            WorkBoost has successfully helped a multitude of organizations in simplifying their strategies. These results strengthen our beliefs that we are on the right path to change the way organizations design and deploy strategy. Are you interested how WorkBoost can help you translate your strategy into results? Send us a message and lets discuss!
            The WorkBoost app is highly customizable progressive web-application and incorporates principles of corporate nudging and gamification to gather key metrics and feedback.
            We closely collaborate with leading universities to refine and extend our knowledge on how organizations can effectively turn strategy into results. See
            <a
              href="#"
            >forScience</a> for more information.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
:root {
  --bg: #fdfdfd;
  --highlight1: rgb(23, 200, 188);
  --highlight2: rgb(20, 148, 139);
  --color: #1a1e24;
}

#feature .row.center {
  display: flex;
  align-items: center;
}
#feature i {
  font-size: 10rem;
  color: black;
}

#feature h3 {
  color: rgb(23, 200, 188);
}

.item1 {
  display: block;
  clear: both;
  padding-bottom: 4rem;
  position: relative;
  margin-left: 0px;
  padding-left: 0px;
}

.item1:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  content: "";
  font-size: 5rem;
  width: 9rem;
  height: 9rem;
  float: left;
  margin: 0 1.5rem 0.75rem 0;
  color: var(--bg);
  background: var(--highlight1)
    linear-gradient(to bottom right, var(--highlight1) 25%, var(--highlight2));
  text-shadow: 0 0 2px var(--highlight1);
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

.item1:after {
  width: 4.5rem;
  height: 4.5rem;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: var(--highlight1);
  z-index: 0;
  border-top-left-radius: 3px;
}
</style>
