import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductsLogo from '../../assets/productsLogo.svg'
import { CardProduct, Header } from '../../components'
import apiCodeburger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

function Products() {
  const { categoryId } = useParams()
  const [activeCategory, setActiveCategory] = useState(
    parseInt(categoryId, 10) || 0
  )
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    document.body.style.backgroundColor = '#e5e5e5'

    return () => {
      document.body.style.backgroundColor = null
    }
  }, [])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeburger.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()

    async function loadProducts() {
      const { data } = await apiCodeburger.get('products')

      const newProducts = data.map(product => ({
        ...product,
        formatedPrice: formatCurrency(product.price)
      }))

      setProducts(newProducts)
    }

    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilterProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilterProducts(newFilterProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Header />
      <img className="productLogo" src={ProductsLogo} alt="logo" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
              isActiveCategory={activeCategory === category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filterProducts &&
          filterProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Products
