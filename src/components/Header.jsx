import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = ({cart}) => {
  return (
    <div className='navbar'>
        <div className='logo'>Food Cart</div>
            <ul>
                <li>
                    <Link to={"/Home"}>Home</Link>
                </li>

                <li>
                    <Link to={"/Viewcart"}>View Cart <span>{cart.length}</span> </Link>
                </li>
            </ul>
    </div>
  )
}
