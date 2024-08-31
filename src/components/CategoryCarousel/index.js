import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Category from '../../assets/category-img.svg'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItens, Image, Button } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      console.log('Categories data:', data)
      setCategories(data)
    }
    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 }
  ]

  return (
    <Container>
      <CategoryImg src={Category} alt="logo da categoria" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image
                src={`https://codeburger-back.onrender.com/product-file/${category.path}`}
                alt={`foto da categoria ${category.name}`}
              />
              <Button onClick={() => navigate(`/produtos/${category.id}`)}>
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
