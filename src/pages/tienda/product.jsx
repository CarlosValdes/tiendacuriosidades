import React, { useContext } from 'react'
import {ShopContext} from '../../context/shopcontext'

export const Product = (props) => {
  const {id,productName,price,productImage}=props.data;
  const {addToCart, cartItems}=useContext(ShopContext)

  const cantidadActualItem=cartItems[id];
  return (
    <div className='producto' key={id}>
      <img src={productImage} alt="" />
      <div className="producto-descripcion">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='agregarAlCarrito'onClick={()=>addToCart(id)}> 
        Agregar al Carrito {cantidadActualItem>0 && <>({cantidadActualItem})</> }
      </button>
    </div>
  )
}
