import React from 'react';
import {Link} from 'react-router-dom'
import  mail from '../img/mail.png';
  
function register(){
    return(
        <div class="continer-fluid">
<div class="row">
<div  class="signin col-lg-6 col-md-6 col-sm-12 ">
           
           <form   method="post" enctype="multipart/form-data"  >
           <h3>REGISTER</h3>
        
           <lable>Username</lable>
           <input type="text" class="form-control" autocomplete="off" name="name" id="name"/>
           <lable>Email</lable>
           <input type="email" class="form-control" autocomplete="off" name="email" id="email"/>
           <lable>Mobilenumber</lable>
           <input type="text" class="form-control" autocomplete="off" name="phonenumber"id="number"/> 
           <lable>Password</lable>
          <input type="password" class="form-control" autocomplete="off"name="passwrd" id="pwd"/>
           <lable>Confirm Password</lable>
           <input type="password"  class="form-control"  autocomplete="off" id="conpwd"/>
           <button id="bttn" name="btn">Register</button>
           <div id="a"> <p>already have account</p>
       <Link to="/login"id="sig">log-in</Link></div>
       
           </form>
           </div> 
           
       <div class=" col-lg-6 col-md-6 col-sm-12 ">
           <img  class="img img-responsive"src={mail} alt=""/>
       </div>
         
        
        
      
</div>
   </div>

    )
}
 export default register;