import React from 'react';
import  mail from '../img/mail.png';




 function contect(){
    return(
       
<div class="container-fluid">
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-12 col-xm-12">
<form   method="post" enctype="multipart/form-data"  >
           <h3>CONTECT</h3>
           <lable>Username</lable>
           <input type="text" class="form-control" autocomplete="off" name="name" id="name"/>
           <lable>Email</lable>
           <input type="email" class="form-control" autocomplete="off" name="email" id="email"/>
           <lable>Problem</lable>
           <textarea id="problem"  type="text" class="form-control" rows="5" cols="5" name="problem"autocomplete="off"> </textarea>
           <button id="bttn" name="btn">SUBMIT</button>
        </form>
        </div>
        <div class=" col-lg-6 col-md-6 col-sm-12 col-xm-12">
        <img class="img img-responsive" src={mail} alt=""/>
        </div>
        </div>
        </div>
    )
}
export default contect;