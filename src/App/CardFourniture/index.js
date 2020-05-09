import React from 'react';

const CartMeuble = ({data,addFourniture,souFourniture})=>{ 

return(
    
    <div className="card border-warning">      
      <div className="card-body">
        <p className="card-text text-center ">{data.Nom}</p>
      </div> 
      
      <div className="card-footer row">            
        <button type="button col" className="btn btn-outline-dark font-weight-bold  " onClick={()=>addFourniture(data.id)}>+</button>
          <p className="col text-center font-weight-bold h4">{data.nombreFou}</p>
        <button type="button col" className="btn btn-outline-dark font-weight-bold" onClick={()=>souFourniture(data.id)}>-</button>      
      </div>    
  </div>   
);};

export default CartMeuble;