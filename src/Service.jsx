import React from "react";
import Navbar from './Navbar';
import Common from "./Common";
import CardCommon from "./CardCommon";
import Carddata from "./Carddata";





const Service =()=>{
    
return(
<>

<Common heading="Our Services" para="Our services are here"/>

<div className="jumbotron mb-5">
<div className="container">
<div className="row p-lg-5 gy-4">
{
      Carddata.map((val, ind)=>{

        return(
            <CardCommon key={ind} title={val.title} desc={val.des} img={val.img}/>
        );

 })
}
</div>
</div>
</div>







</>
  
);
  
}


export default Service;