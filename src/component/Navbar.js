import React from 'react';
import{Link} from  'react-router-dom';





function navbar(){
    return(
   <>
       <nav class="navbar fixed-top ">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link class="navbar-brand" to='/'>Cars</Link>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
           <ul class="nav navbar-nav  navbar-right">
               <li>
              <Link  to='/'>home</Link>
               </li>
               <li>
               <Link to='/login'>login</Link>
               </li>
               <li>
               <Link to='/Contect'>contect</Link>
               </li>
               <li>
               <Link to='/About'>about</Link>
               </li>
               <li>
                 <Link to='/Register' id="signup">Sign-up</Link>
               </li>
             </ul>
        </div>
      </div>
     </nav>
    
      </>
    )
}
 
export default navbar;