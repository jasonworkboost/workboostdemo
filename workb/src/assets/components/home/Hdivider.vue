<template>
<section id="divider">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- <h2 class="text-left" style="font-weight: 100; font-style: italic; line-height: 5rem;">We believe that the key to organizational success is to have 
          a strategy that converts into value creation. That’s why we are dedicated to challenging organizations to critically reflect on the way they design 
          and deploy their strategy, and helping them to creat a strategy for results.</h2> -->
           <div class="testimonial-quote">
            <blockquote>
                <p>We believe that the key to organizational success is to have 
          a strategy that converts into value creation. That’s why we are dedicated to helping create strategy that translates into results by challenging organizations to critically reflect on the way they design 
          and deploy their strategy.”</p>
            </blockquote>  
            <cite><span>Jason Gawke</span><br>
                CEO-WorkBoost
            </cite>
    </div>    
        
    <hr style="margin: 60px auto; opacity: .5;">
    </div>
    </div>
    </div>
</section>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
.testimonial-quote blockquote {
    /* Negate theme styles */
    border: 0;
    margin-bottom: 40px;
    padding: 0;
    font-size: 2.0em;
    font-style: italic;
    line-height: 1.8 !important;
    position: relative;
    text-shadow: 0 1px white;
    z-index: 600;
}

.testimonial-quote blockquote * {
    box-sizing: border-box; 
}

.testimonial-quote blockquote p {
    color: #75808a; 
    line-height: 1.8 !important;
}

.testimonial-quote blockquote p:first-child:before {
    content: '\201C';
    color: #17C8BC;
    font-size: 7.5em;
    font-weight: 700;
    opacity: .3;
    position: absolute;
    top: -.4em;
    left: -.2em;    
    text-shadow: none;
    z-index: -300;
}

.testimonial-quote img {
    border: 3px solid #9CC1D3;
    border-radius: 50%;
    display: block;
    width: 120px;
    height: 120px;
    position: absolute;
    top: -.2em; 
    left: 0;    
}

.testimonial-quote cite {
    color: gray;
    display: block;
    font-size: .8em; 
}
  
.testimonial-quote cite span {
    color: #5e5e5e;
    font-size: 1.3em;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 1px white; 
}

.testimonial-quote {
    position: relative; 
}
</style>


