<template>
<section id="divider">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- <h2 class="text-left" style="font-weight: 100; font-style: italic; line-height: 5rem;">We believe that the key to organizational success is to have 
          a strategy that converts into value creation. That’s why we are dedicated to challenging organizations to critically reflect on the way they design 
          and deploy their strategy, and helping them to creat a strategy for results.</h2> -->
           <div class="testimonial-quote text-center">
            <blockquote>
                <!-- <p>
                    We believe that the key to organizational success is to have a strategy that converts into value creation. That’s why we are dedicated to helping organizations design and deploy strategy that can do just that.
                    We believe that organizations should be able to use all their resources to do what they do best: create value. We are here to ensure that organizations can do just by helping organization design and deploy strategy that converts.”</p> -->
          <p>We believe that organizations should be able to use all their resources to do what they do best: <span style="color: #fc4a1a; font-weight: 500;"> Create Value</span>. That's why we are dedicated to helping organizations design and deploy strategy that foster employee engagement and propel your business forward.
          </p>
            </blockquote>  
            <cite><span>Jason Gawke</span><br>
                CEO-WorkBoost
            </cite>
    </div>    
        
    <hr style="margin-top: 45px; opacity: .5;">
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
    font-size: 1.8em;
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
    padding-top: 30px;
    line-height: 1.8 !important;
}

.testimonial-quote blockquote p:first-child:before {
    content: '\201C';
    color: #17C8BC;
    font-size: 9.5em;
    font-weight: 700;
    opacity: .3;
    position: absolute;
    top: -.5em;
    left: -.3em;    
    text-shadow: none;
    z-index: -300;
}

.testimonial-quote blockquote p:first-child:after {
    content: '\201D';
    color: #17C8BC;
    font-size: 9.5em;
    font-weight: 700;
    opacity: .3;
    position: absolute;
    bottom: -1.16em;
    right: .05em;    
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


