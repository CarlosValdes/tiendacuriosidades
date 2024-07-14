import React,{useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import './navibar.css'
import {ShopContext} from '../context/shopcontext'


export const NaviBar = () => {
  const  {getTotalProductCartAmount,cartItems}=useContext(ShopContext);
  const [cuenta,setContador]=useState(0);
  
  useEffect(()=>{
    setContador(getTotalProductCartAmount);
  },[cartItems])

  
  return (
    <div className='navbar'>
      <div className='navbar-l'>
      <Link to="/">Comprar</Link>
      <Link to="/lista" className='navbar-existencia'>Existencias</Link>
      
      <Link to="/resumen">Dashboard</Link>
      </div>
        <div className='links'>
             <Link to ="/cart"><ShoppingCart className='icono'/>
             <span className='badge'>{cuenta}</span>
             
             </Link>

             
        </div>
    </div>
  )
}
