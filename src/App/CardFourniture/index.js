import React from 'react';

const CartMeuble = ()=>{ 

return(
    
    <div className="card">      
      <div className="card-body">
        <p className="card-text"></p>
      </div> 
      <div className="card-footer row justify-content-around">
        <button type="button" className="btn btn-danger">+</button>
        <p className="col-1">         2         </p>
        <button type="button" className="btn btn-success">-</button>
      </div>   
    </div>
  
);};

export default CartMeuble;