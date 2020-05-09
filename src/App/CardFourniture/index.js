import React from 'react';

const CartMeuble = ({data,addFourniture,souFourniture})=>{ 

return(
    
    <div className="card">      
      <div className="card-body">
        <p className="card-text text-center">{data.Nom}</p>
      </div> 
      <div className="card-footer row justify-content-around">
        <button type="button" className="btn btn-danger" onClick={()=>addFourniture(data.id)}>+</button>
          <p className="col-4 text-center">{data.nombreFou}</p>
        <button type="button" className="btn btn-success" onClick={()=>souFourniture(data.id)}>-</button>
      </div>   
    </div>
  
);};

export default CartMeuble;