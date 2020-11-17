import React, { useContext }  from 'react'
import styled from 'styled-components';
import { ContextColors } from '../context/colorsContext';
import Title from '../components/Title';
import Colores from '../components/Colores';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeColorsPreview = styled.div`
  width: 400px;
  text-align: center;
`

const Home = () => {
  const { colors } = useContext(ContextColors); 

  return (
    <>
      <Title content='Home' fontSize={35}/>
    
      <Container>
        <HomeColorsPreview>
          <Title content='Colores simples' fontSize={25}/>
          <Colores typeColor="simpleColor" colores={colors.simple || []} isHomePreview/>
        </HomeColorsPreview>

        <HomeColorsPreview>
          <Title content='Colores degradados' fontSize={25}/>
          <Colores typeColor="degColor" colores={colors.deg || []}  isHomePreview/>
        </HomeColorsPreview>
      </Container>
    </>
  )
}

export default Home
