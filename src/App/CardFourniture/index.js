import React from 'react';

const CartMeuble = ({data})=>{ 

return(
    
    <div className="card">      
      <div className="card-body">
        <p className="card-text text-center">{data.Nom}</p>
      </div> 
      <div className="card-footer row justify-content-around">
        <button type="button" className="btn btn-danger">+</button>
          <p className="col-1">{data.Quantité}</p>
        <button type="button" className="btn btn-success">-</button>
      </div>   
    </div>
  
);};

export default CartMeuble;