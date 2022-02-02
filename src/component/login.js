import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../img/login.png';

function login(){
    return(
        <div class="continer-fluid">
        <div class="row">
       <div  class="col-lg-5 col-md-6 col-sm-12">
         <form  method="post"  >
         <h3>Admin login</h3>
               
               <lable>Username</lable>
                <input type="text" class="form-control" autocomplete="off" name="name" id="name"/>
                <lable>password</lable>
                <input type="password" class="form-control" autocomplete="off" name="pwd" id="password"/>
                <button id="bttn" name="btn">Login</button>
               <div id="a"> <p>Don't have a account</p>
            <Link to='/register' id="sig">Register</Link>
            </div>
         </form>
     
       </div>
      <div  class="col-lg-7 col-md-6 col-sm-12 ">
          <img class="img img-resonsive" src={Login} alt=""/>
      </div>
        </div>
       </div>
    )
}

export default login;