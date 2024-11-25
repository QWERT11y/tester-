import React, { useEffect, useState } from 'react'

import {  Routes , Route } from 'react-router-dom'

import Home2 from './Pages/Home/Home2'
import Cards from './Cards'
import Lox from './Lox/Lox'
import Products from './Products/Products'
import Login from './Auth/Login'


const App = () => {
    const [products , setProducts] = useState([])

    const fetchProducts = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data)
    };
    useEffect(() => {
      fetchProducts();
    }, []);



    const [loading, setLoading] = useState(true)
   
 



    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            
        }, 1000);

    }, [])


    return (
        <div>

            {loading ? <div className="w-[99vw] h-screen bg-[#030408]  flex justify-center items-center flex-row gap-2">
                <div className="w-[33px] h-[33px] rounded-full bg-[#202127] animate-bounce"></div>
                <div className="w-[33px] h-[33px] rounded-full bg-[#202127] animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-[33px] h-[33px] rounded-full bg-[#202127] animate-bounce [animation-delay:-.5s]"></div>
            </div> : <>
            <div>

            <Lox>

<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/home" element={<Home2/>}/>
<Route path="/cards/:id" element={<Cards/>}/>
<Route path="/products" element={<Products/>}/>
</Routes>
</Lox> 
            </div>
            </>


            }
        

        </div>


    )
}

export default App