import React, { useEffect } from 'react'
import './cart.css'
import { useState,useContext } from 'react'
import { Cartcontext } from '../App'


export const Viewcart = ({product}) => {

  const {cart,setCart } = useContext(Cartcontext)
  const [total, settotal] = useState(0)
 
  useEffect(()=>{
    settotal(cart.reduce((acc,curr) => acc + parseInt(curr.price),0))
  },[cart])

  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };
  
  return (
    <>
    <h3 className='heading'>Cart Product</h3>
    <div className="cart-container">
      {cart.map((product) => (
        <div className="cart-product" key={product.id}>
        <div className="img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
        <button className='remove-btn' onClick={() => removeCart(product.id)}>Remove</button> 
      </div>))}

    </div>
    <h3>Total Amount : {total}</h3>
    </>
    
  )
}
