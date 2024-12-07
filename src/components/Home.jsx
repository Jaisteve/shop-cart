import React, { useState } from 'react'
import data from '../assets/menus.json'
import { Product } from './Product'
import "./Home.css"


export const Home = () => {
    const [products] = useState(data)
  return (
    <div className='product-container'>
        {products.map((product) => (
            <div> 
                <Product key={product.id} product={product}/>
            </div>
        ))}
    </div>
  )
}
