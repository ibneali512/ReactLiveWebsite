import React from "react";
import Navbar from './Navbar';

const Common =(props)=>{

return(
 
<section className="banner">
  <div className="container">
    <h3>{props.heading}</h3>
    <p>{props.para} <br/> </p>
  </div>
</section>
);
  
}


export default Common;

