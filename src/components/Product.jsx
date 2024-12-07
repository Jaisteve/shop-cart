import React from 'react'
import './Product.css'
import { Cartcontext } from '../App'
import { useContext } from 'react'
export const Product = ({product}) => {

     const {cart,setCart} = useContext(Cartcontext)
     const desc = product.description.length > 25 ? product.description.substring(0,20)+"..." : product.description 

    const addCart = () => {
      setCart([...cart,product])
    }

    const removeCart = () => {
      setCart(cart.filter((c)=>(c.id!==product.id)))
    }
  return (
    <div className='product'>
        <div className='pic'>
            <img src={product.image} alt={product.name} />
        </div>
        <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.price}</p>
        <p>{desc}</p>
        {cart.includes(product) ? 
        (<button className='remove-btn' onClick={removeCart}>Remove from cart</button> ): 
        (<button onClick={addCart}>Add to cart</button>
      )}
        </div>
        
    </div>
  )
}
