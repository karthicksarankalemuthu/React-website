import React from 'react';
import MRbill from '../img/bill.jpg';


 function about(){
    return(
       
     <div class="container-fulid">
         <div class="row">
             <div class="col-lg-8 col-md-6 col-sm-12 col-xm-12">
              <lable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, lorem a sollicitudin dapibus, tellus lectus fringilla ante, vel sollicitudin diam lectus dapibus est. Phasellus blandit arcu vitae neque dapibus, eget ullamcorper tortor pretium. Quisque sodales nibh vel risus ultricies convallis. Nulla fermentum malesuada mi in vehicula. Suspendisse pulvinar venenatis metus eget blandit. Donec elementum auctor dignissim. Integer purus velit, cursus ac malesuada quis, pulvinar in eros.</lable>
             </div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xm-12">
                 <img class="img img-responsive" src={MRbill} alt=""/>
                 </div>
         </div>
     </div>

    )
}
export default about;