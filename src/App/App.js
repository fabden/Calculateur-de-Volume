import React,{ useState } from 'react';
import './style.css';
import CartMeuble from './CardFourniture';
import datasFourniture from '../Datas';

function App() {

const [datas, setDatas] = useState(datasFourniture);



  return (
    <div className='container'>
      <div className='row justify-content-around'>  
          <div className='col-7 border border-secondary rounded'>  
            <div className="card-columns">
              {datas.map((data)=>(<CartMeuble data={data} key={data.id}/>))}        
          </div>
        </div> 
        <div className='col-4 border border-secondary rounded'>
          <p className='bg-primary text-center'>Estimations Volumes </p>

        </div>
     </div>
    </div>
   ) };

export default App;
