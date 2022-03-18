import React from "react";

const Pd =(prop)=>{

return(
 
    <div class="row no-gutter">
    <div class=" col-6 col-lg-4 col-sm-6">
      <img src={prop.image} class="img-thumbnail" alt="Project-1" width="100%" height="auto"/>
    </div>
    <div class="col-6 col-lg-4 col-sm-6">
       <img src={prop.image} class="img-thumbnail" alt="Project-1" width="100%" height="auto"/>
    </div>
    <div class="col-6 col-lg-4 col-sm-6">
       <img src={prop.image} class="img-thumbnail" alt="Project-1" width="100%" height="auto"/>
    </div>
  </div>
);
  
}


export default Pd;