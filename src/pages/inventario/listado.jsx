import React from 'react'

import {Existencias} from '../../products'
import { Product } from '../tienda/product'
import { Prodinv } from './prodinv'


export const Listado = () => {
  return (
    <div className='listado'>
      <div className="listado-titulo">
        <h1>Reporte Existencias</h1>
      </div>
      <div className="listado-productos">
      <div className='prinv-alt'>
        <p className='prinv-alt-hdr'><b>ID</b></p>
        <p className='prinv-alt-hdr'><b>Imagen</b></p>
        <p className='prinv-alt-hdr'><b>Nombre</b></p>
        <p className='prinv-alt-hdr'><b>Existencias</b></p>
    </div>
        {Existencias.map((Product)=>(
          <Prodinv data={Product}/>
        )
        )}
      </div>
    </div>
  )
}
