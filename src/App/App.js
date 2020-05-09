import React,{ useState } from 'react';
import './style.css';
import CartMeuble from './CardFourniture';
import datasFourniture from '../Datas';

function App() {

const [datas, setDatas] = useState(datasFourniture);

// addition soustration 

const addFourniture = (id)=>{
  const newdatas = datas.map((data)=>((data.id === id) ? ({...data, nombreFou:data.nombreFou + 1 }) : ({...data}) ));
  setDatas(newdatas);
};

const souFourniture = (id)=>{
  const newdatas = datas.map((data)=>((data.id === id && data.nombreFou !=0) ? ({...data, nombreFou:data.nombreFou -1 }) : ({...data}) ));
  setDatas(newdatas);
};

// selecteur pour estimation de volumes

const filterFourniture = datas.filter((d)=> d.nombreFou >0);




  return (
    <div className='container'>
      <div className='row justify-content-around'>  
          <div className='col-7 border border-secondary rounded'>  
            <div className="card-columns">
              {datas.map((data)=>(<CartMeuble data={data} key={data.id} addFourniture={addFourniture} souFourniture={souFourniture}/>))}        
          </div>
        </div> 
        <div className='col-4 border border-secondary rounded'>
        <p className='bg-primary text-center'>Liste Fourniture</p>

         {filterFourniture.map((d) => <p className='bg-primary'>{d.nombreFou} X {d.Nom}</p> )} 

         <span class="badge badge-warning">Warning</span>     

        </div>
     </div>
    </div>
   ) };

export default App;
