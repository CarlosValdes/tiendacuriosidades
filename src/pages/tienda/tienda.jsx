import React, { useState } from 'react'
import {Productos} from '../../products';
import { Product } from './product';
import "./tienda.css";

export const Tienda = () => {

  const [search,setSearch]=useState('');

  return (
    <div className='tienda'>
        <div className='tienda-titulo'>
            <h1>Tienda De Curiosidades</h1>
            <div className="tienda-buscador">
              <input onChange={(e)=>setSearch(e.target.value)} placeholder='Buscar Producto'></input>
            </div>
            
        </div>
        <div className="tienda-productos">
            {Productos.filter((item)=>{
              return search.toLowerCase()==='' ? item : 
              item.productName.toLowerCase().includes(search);
            })
            .map((product)=>(
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}
