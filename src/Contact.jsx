import React, { useState } from "react";
import Common from "./Common";

const Contact =()=>{
const [data, setdata] = useState(
  {
    fname:"",
    phone: "",
    email: "",
    msge: "",
  }
);


const InputEvent=(get)=>{
  
  let value= get.target.value;
    let name= get.target.name;

setdata((preval)=>{
  return{
    ...preval,
    [name]: value,

  };
})
}
const FormSubmit=(e)=>{
  e.preventDefault();
  alert( ` ${data.phone} ${data.email} ${data.fname} ${data.msge}`);

}
return(
 
<>
<Common heading="Contact us" para="Feel Free to Contact us at anytime." />
<div className="jumbotron p-1">
<div className="container mx-auto mb-5 p-5">
    <h1 className="text-center mb-5"> Get a Quote</h1>
<div className="row">
<div className="col-2"></div>
<div className="col-8">

<form onSubmit={FormSubmit}>

<div class="mb-3">


<input class="form-control"  type="text" placeholder="Enter your name" value={data.fname} name= "fname" onChange={InputEvent}/>

</div>
< div class="mb-3">
<input class="form-control"  type="number" placeholder="Enter your Phone" value={data.phone} name= "phone" onChange={InputEvent}/>

</div>
<div class="mb-3">
<input type="email" class="form-control"  placeholder="name@example.com" value={data.email} name= "email" onChange={InputEvent}/>
</div>
<div class="mb-3">

  <textarea class="form-control" placeholder="type your message" rows="3"  value={data.msge} name= "msge" onChange={InputEvent}></textarea>
</div>
<div class="mb-3">
<button type="submit" class="btn btn-dark" >Submit</button>
</div>
</form>
</div>
<div className="col-2"></div>
</div>
</div>
</div>
</>

);
}


export default Contact;