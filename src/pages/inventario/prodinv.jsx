import React from 'react'
import './listado.css'

export const Prodinv = (props) => {
    const {id,productName,productImage,existencias}=props.data;
  return (
    <div className='prinv'>
        <p>{id}</p>
        <img src={productImage} alt="" />
        <p>{productName}</p>
        <p>{existencias}</p>
    </div>
  )
}
