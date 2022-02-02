
import React from 'react';
import {Link} from 'react-router-dom';
import img from '../img/car.png';


 function home(){
    return(
 
 <div class="container-fluid">
 
          <div class="row">
             <div class="text col-lg-6 col-md-6  col-xm-12 col-sm-12">
              <h1>It's Time For Looking Your Own space</h1><br/>
              <h2>They Are Save Your Valuble Time</h2>
              <h2  id="q">See Your nearby parking sold</h2>
              <Link  id="btn" to='/'>Get Stater</Link>
         </div>
         
            <div   class="img col-lg-6 col-md-6  col-xm-12 col-sm-12">
            <img class="img img-responsive"  width="500px"src={img}/>
            </div>
    </div>
 </div>
        
 )
}
export default home;