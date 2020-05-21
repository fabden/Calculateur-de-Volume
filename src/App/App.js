import React,{ useState } from 'react';
import './style.css';
import CartMeuble from './CardFourniture';
import datasFourniture from '../Datas';

function App() {

const [datas, setDatas] = useState([...datasFourniture]);
const [menu, setMenu] = useState("Salon");

// addition soustration 

const addFourniture = (id)=>{
  const newdatas = datas.map((data)=>((data.id === id) ? ({...data, nombreFou:data.nombreFou + 1 }) : ({...data}) ));
  setDatas(newdatas);
};

const souFourniture = (id)=>{
  const newdatas = datas.map((data)=>((data.id === id && data.nombreFou !==0) ? ({...data, nombreFou:data.nombreFou -1 }) : ({...data}) ));
  setDatas(newdatas);
};

// selecteur pour estimation de volumes

const filterFourniture = datas.filter((d)=> d.nombreFou >0);

//somme des volume 

const total = datas.map((d) => d.Volumes * d.nombreFou).reduce((totale, d) => totale + d, 0);

//fonction selection menu
const selectMenu = datas.filter((d)=>d.Categorie===menu);


  return (
    <div className='container h-75 mt-5'>
      <div className='row justify-content-around '>  
          <div className='col-lg-7 border border-warning rounded-lg  col-sm-12 col-9'> 
         <div className="row justify-content-around h1 font-weight-bold bg-warning p-2 rounded-lg">           
           Categorie
          </div> 
          <div className="row justify-content-around mb-2"> 
            <div className='col'>          
              <ul className="nav nav-pills nav-justified ">
                <li className="nav-item ">
                  <p className="nav-link btn-warning"  onClick={(e)=>{setMenu(e.target.textContent)}}>Salon</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link btn-warning"  onClick={(e)=>{setMenu(e.target.textContent)}}>Cuisine</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link btn-warning"  onClick={(e)=>{setMenu(e.target.textContent)}}>Jardin</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link btn-warning"  onClick={(e)=>{setMenu(e.target.textContent)}}>Chambre</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link btn-warning"  onClick={(e)=>{setMenu(e.target.textContent)}}>Garage</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link btn-warning"  onClick={(e)=>{setMenu(e.target.textContent)}}>Divers</p>
                </li>
              </ul>
              </div>
          </div> 
         
         <div className="row justify-content-center">
           <div className="col liste">
            <div className="card-columns">
              {selectMenu.map((data)=>(<CartMeuble data={data} key={data.id} addFourniture={addFourniture} souFourniture={souFourniture}/>))}        
            </div>
          </div> 
          </div>
        </div>         
        <div className=' border border-warning rounded-lg col-lg-4 col-sm-12 col-9 my-2'>
        <div className="row justify-content-center  ">
          <p className='bg-warning text-center col-12 p-3  h1 font-weight-bold align-items-start '>Listes </p>
        </div>    
        <div className="liste ">
         {filterFourniture.map((d) => 
          <div className="row border-bottom border-warning " key= {d.id}>
          <div className="col-9">
          <p className='  m-2'>{d.nombreFou} x {d.Nom}</p>
          </div>
          <div className="col-1">
          <button type="button " className="btn btn-outline-dark font-weight-bold py-0 m-2" onClick={()=>souFourniture(d.id)}>-</button>
          </div>
          </div> )}               
         </div>
         <div className="row justify-content-center align-self-end">
         <p className="bg-warning text-center col-12 p-3 rounded-bottom h4 my-n1 "> Volumes: <span className="font-weight-bold h4">{total} m²</span></p>
        </div>

        </div>
     </div>
    </div>
   ) };

export default App;
