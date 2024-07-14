import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import './navibar.css'


export const NaviBar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
             <Link to="/">Comprar</Link>
             <Link to ="/cart"><ShoppingCart className='icono'/></Link>
        </div>
    </div>
  )
}