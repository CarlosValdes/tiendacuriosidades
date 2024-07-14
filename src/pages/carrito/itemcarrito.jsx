import React,{ useContext }  from 'react'
import {ShopContext} from '../../context/shopcontext'

export const Itemcarrito = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart, cartItems, removeFromCart,updateCartItemCount,getTotalProductAmount}=useContext(ShopContext)
  return (
    <div className='itemcarrito'>
       <img src={productImage} alt="" />
       <div className='descripcion'>
        <p><b>{productName}</b></p>
        <p>$ {price}</p>
        <div className="infocontador">
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input  value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}> + </button>
        </div>
        <div className='subtotal'>
        <p>Subtotal: ${getTotalProductAmount(id)}</p>
        </div>
       </div>
    </div>
  )
}
