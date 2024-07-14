import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import './navibar.css'


export const NaviBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-l'>
      <Link to="/">Comprar</Link>
      <Link to="/lista" className='navbar-existencia'>Existencias</Link>
      
      <Link to="/resumen">Dashboard</Link>
      </div>
        <div className='links'>
             
             <Link to ="/cart"><ShoppingCart className='icono'/></Link>
             
        </div>
    </div>
  )
}
