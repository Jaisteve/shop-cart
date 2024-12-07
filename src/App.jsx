
import './App.css'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Viewcart } from './components/Viewcart'
import { useState,createContext } from 'react'

export const Cartcontext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <Cartcontext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className="Container">
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Viewcart" element={<Viewcart/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </Cartcontext.Provider>
  )
}

export default App
