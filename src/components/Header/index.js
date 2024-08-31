import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart-icon.svg'
import Person from '../../assets/users-icon.svg'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  PageLink,
  Line,
  PageLinkExit,
  PageLinkCart
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const { cartProducts, clearCart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const logoutUser = () => {
    clearCart()
    logout()
    navigate('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos/0')}
          isActive={pathname === '/produtos'}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLinkCart
          onClick={() => navigate('/carrinho')}
          data-cartcount={cartProducts.length}
        >
          <img src={Cart} alt="carrinho" />
        </PageLinkCart>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
