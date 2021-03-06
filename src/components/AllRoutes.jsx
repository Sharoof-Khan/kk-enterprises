import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Cart from '../pages/Cart'
import {HomePage} from '../pages/HomePage'
import Order from '../pages/Orders'
import Product from '../pages/Product'
import Products from '../pages/Products'
import WithSubnavigation from './Navbar'
const AllRoutes = () => {
  return (
    <>
    <WithSubnavigation />
      <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/products' element = {<Products/>} />
          <Route path='/products/:id' element = {<Product/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Order />} />
    </Routes>
    </>
  )
}

export default AllRoutes