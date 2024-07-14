import React, { useState } from 'react'

import {Existencias} from '../../products'
import { Product } from '../tienda/product'
import { Prodinv } from './prodinv'


export const Listado = () => {
  const [search,setSearch]=useState('');
  return (
    <div className='listado'>
      <div className="listado-titulo">
        <h1>Reporte Existencias</h1>
        <div className="tienda-buscador">
              <input onChange={(e)=>setSearch(e.target.value)} placeholder='Buscar Producto'></input>
            </div>
      </div>
      <div className="listado-productos">
      <div className='prinv-alt'>
        <p className='prinv-alt-hdr'><b>ID</b></p>
        <p className='prinv-alt-hdr'><b>Imagen</b></p>
        <p className='prinv-alt-hdr'><b>Nombre</b></p>
        <p className='prinv-alt-hdr'><b>Existencias</b></p>
    </div>
        {Existencias.filter((item)=>{
              return search.toLowerCase()==='' ? item : 
              item.productName.toLowerCase().includes(search);
            })
        .map((Product)=>(
          <Prodinv data={Product}/>
        )
        )}
      </div>
    </div>
  )
}
