import React from "react";
import Common from "./Common";
import Pd from "./Pd";

const img="http://4.bp.blogspot.com/-bahoT9-tRn4/UYQmxSCtFdI/AAAAAAAAA6s/QQzILTQba18/s1600/art-camera-cool-photography-toy-Favim.com-446299.jpg";
const img2="http://s9.favim.com/orig/130725/photography-pocket-watches-v-vintage-Favim.com-801353.jpg";
const Home =()=>{


return(
 <>

<Common heading="Graphic & Web Designer" para="A Full Stack Developer, Based in XXXXXX."/>


<div className="abt" id="about">
<div className="jumbotron pb-5">
  <div className="container">
    <h3>We Have What You Need</h3>
    <hr></hr>
    <p>From a responsive Front End design to a Dynamic Backend handling,<br/> we provide you with your dream site and increase your chance of success.</p>
    
  <a href="#portfolio" className="btn btn-default">Get Started!</a>
  </div> 
</div>
</div>




<div class=" jumbotron no-padding text-center" id="portfolio">
 <div class="container">
   <h1>Portfolio</h1>
    <hr></hr>
  </div>
 
  <div class="container-fluid">
   
    <Pd image={img}/>
    
    <Pd image={img2}/>
   
  </div>
</div>




<div class="contact" id="contact">
  <div class="bg-dark">
<div class="container p-5" >
  <div class="row">
    <div class="col-lg-12 col-lg-offset-2 text-center">
      <h1>Let's Get In Touch!</h1>
    
    <p class="my-font">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
    </div>
   <div class="padded">
    <div class="col-lg-12 col-lg-offset-2 text-center">
    <i class="fa fa-phone fa-3x sr-contact"></i>
    <p>9999999999</p>
    </div>
    
    <div class="col-lg-12 text-center">
       <i class="fa fa-envelope-o fa-3x sr-contact"></i>
       <p><a href="mailto:your-email@your-domain.com">gfgfgfg@gmail.com</a></p>
    </div>
    </div>
  </div>
  </div>
</div>
</div>
<div className="slanted"></div>
<footer class="footer p-5">
  <div class="container">
    <div class="row">
    <div class="col-sm-6 text-center">
      <h3>About this Page</h3>
      <p>Used:Bootstrap,Jquery,HTML,CSS.<br/>
     </p>
      
    </div>
      <div class="col-sm-6 text-center">
        <h3>Around The Web</h3>
        <ul class="list-icon">
            <a type="button" ><i class="fa fa-facebook-official fa-lg"></i></a>
            <a type="button" ><i class="fa fa-github-square fa-lg gt" aria-hidden="true"></i></a>
              <a type="button" href=""><i class="fa fa-google-plus-official fa-lg" aria-hidden="true"></i></a>
        </ul>
    </div> 
    
  </div>
 </div>
 
</footer>

</>

);
  
}


export default Home;
