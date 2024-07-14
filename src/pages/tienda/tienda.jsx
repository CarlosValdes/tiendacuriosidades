import React from 'react'
import {Productos} from '../../products';
import { Product } from './product';
import "./tienda.css";

export const Tienda = () => {
  return (
    <div className='tienda'>
        <div className='tienda-titulo'>
            <h1>Tienda De Curiosidades</h1>
        </div>
        <div className="tienda-productos">
            {Productos.map((product)=>(
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}
