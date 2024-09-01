import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Cart, Admin } from '../containers'
import Products from '../containers/Products'
import PrivateRouter from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/produtos" element={<PrivateRouter />}>
          <Route path="/produtos/:categoryId" element={<Products />} />
        </Route>

        <Route path="/carrinho" element={<PrivateRouter />}>
          <Route path="/carrinho" element={<Cart />} />
        </Route>

        <Route path={paths.Order} element={<PrivateRouter isAdmin />}>
          <Route path={paths.Order} element={<Admin path={paths.Order} />} />
        </Route>

        <Route path={paths.Products} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.Products}
            element={<Admin path={paths.Products} />}
          />
        </Route>

        <Route path={paths.NewProduct} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.NewProduct}
            element={<Admin path={paths.NewProduct} />}
          />
        </Route>

        <Route path={paths.EditProduct} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.EditProduct}
            element={<Admin path={paths.EditProduct} />}
          />
        </Route>

        <Route path={paths.NewCategory} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.NewCategory}
            element={<Admin path={paths.NewCategory} />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
