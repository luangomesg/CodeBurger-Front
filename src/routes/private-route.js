import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRouter({ isAdmin }) {
  const user = localStorage.getItem('devburger:userData')

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return user ? <Outlet /> : <Navigate to="/login" />
}

PrivateRouter.propTypes = {
  isAdmin: PropTypes.bool
}

export default PrivateRouter
