import React from "react";

const CardCommon =(card)=>{

return(
 
  
    <div className="col-md-4 col-12">
    <div class="card" >
  <img src={card.img}class="card-img-top" alt="picsum"/>
  <div class="card-body">
    <h5 class="card-title">{card.title}</h5>
    <p class="card-text">{card.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
 </div>
    </div>

);
  
}


export default CardCommon;