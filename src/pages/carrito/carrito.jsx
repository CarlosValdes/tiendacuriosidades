import React , { useContext } from 'react'
import {Productos} from '../../products';
import {ShopContext} from '../../context/shopcontext'
import {Itemcarrito} from './itemcarrito'
import {useNavigate} from 'react-router-dom'
import './carrito.css'

export const Carrito = () => {
  const {cartItems, getTotalCartAmount,checkout}=useContext(ShopContext);
  const totalamnt=getTotalCartAmount();
  const navigate=useNavigate();
  return (
    <div className='carrito'>
      <div>
        <h1>Articulos del carrito</h1>
      </div>
      <div className='carrito'>
        {Productos.map((product)=>{
          if(cartItems[product.id]!==0){
            return <Itemcarrito data={product}/>;
          }
        })}
      </div>
      {totalamnt>0?
      <div className="agastar">
        <p>Subtotal: $ {totalamnt}</p>
        <button onClick={()=>navigate("/")}>Continuar comprando</button>
        <button onClick={()=>checkout()}>Comprar Ahora</button>
      </div>
    : <h1>El carrito esta vacio</h1>  
    }
    </div>
  );
}
