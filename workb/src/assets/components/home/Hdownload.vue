<template>
  <section id="download">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-md-offset-5 col-xs-12 text-left">
          <h1 class="app-descrip">
            <span style="color: #fc4a1a; font-weight: 500;">Deploy </span>
            for results.</h1>
          <p>Succesfully deploying your strategy can significantly decrease the time for your strategic priorities to convert into results. We have developed the WorkBoost app to help you deploy for results.</p>
          <!-- <p>The WorkBoost app is a fully customizable, multi-language progressive web application that introduces custom designed behavioral challenges that align with your strategic priorities for your employees and teams</p> -->
          <p>The WorkBoost app is a fully customizable, multi-langauge application. It uses the principles of corporate nudging to facilitate employees in acquiring the knowledge, skills, and abilities necesary for effectively using strategic guidelines in their day to day work.</p>
         <p>Three challenges that the WorkBoost app can help you overcome</p>
        </div>
        <div class="row">
          <div class="col-md-7 col-xs-12">
            <img src="src\assets\img\phone-about1.png" alt>
          </div>
          <div class="col-md-5 col-xs-12">
            <ul>
              <li>Motivation for change: Create challenges that make acquiring necesary KSA fun.</li>
              <li>(Tool mindset: Integrate with your other practices by giving the app your own logo and color schemes.)</li>
              <li>Langauge barriere: Use the mult-langauge feature for teams in different countries.</li>
              <li>Dispersed focus: WorkBoost app can let different teams focus on different strategic priorities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
#download .app-descrip {
  margin-top: 75px;
}
#download .app-descrip:before {
  content: "";
  position: absolute;
  background-color: #17c8bc;
  top: 35px;
  left: 15px;
  height: 10px;
  width: 130px;
}
#download ul {
  list-style: none;
  padding: 0;
}
#download li {
  padding-left: 1.3em;
}
#download li:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  content: "\f77c"; /* FontAwesome Unicode */
  display: inline-block;
  margin: 1em; /* same as padding-left set on li */
  width: 2.3em; /* same as padding-left set on li */
  height: 2.3em;
  padding-top: .5em;
  background-color: rgb(23, 200, 188);
  border-radius: 1.3em;
  color: white;
  text-align: center;
}
</style>
