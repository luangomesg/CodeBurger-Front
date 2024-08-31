import styled from 'styled-components'

export const Container = styled.div`
  width: 99vw;
  background-color: #e5e5e5;
  height: 100vh;

  .productLogo {
    width: 100%;
  }
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 705px) {
    gap: 30px;
  }

  @media (max-width: 470px) {
    gap: 20px;
  }
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#373737')};
  font-size: 17px;

  @media (max-width: 705px) {
    font-size: 13px;
  }

  @media (max-width: 470px) {
    font-size: 11px;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
  height: 100%;
  background-color: #e5e5e5;

  @media (max-width: 915px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 705px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
