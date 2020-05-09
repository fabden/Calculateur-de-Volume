import React from 'react';
import './style.css';
import CartMeuble from './CardFourniture';

function App() {
  return (
    <div className='container'>
      <div className='row justify-content-around'>  
          <div className='col-7 border border-secondary rounded'>  
            <div className="card-columns">
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          <CartMeuble/>
          </div>
        </div> 
        <div className='col-4 border border-secondary rounded'>
          <p className='bg-primary'>Estimations Volumes </p>
        </div>
     </div>
    </div>
   ) };

export default App;
