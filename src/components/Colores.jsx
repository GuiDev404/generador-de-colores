import React from "react";
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Color from "./Color";
import Emoji from "./Emoji";

const ColorsContainer = styled.section`
  ${props=> props.isHomePreview && css`
    width: 100%;
   
    & a {
      width: 75px;
      height: 50px;
    }
  `}

  & > h3 {
    text-align: center;
    font-size: 18px;
  }
`;

const Colores = ({ typeColor, colores, isHomePreview }) => {
  return (
    <ColorsContainer isHomePreview={isHomePreview} >
      {colores.length ? (
        colores.map(currentColor => {
          return <Color
            isHomePreview={isHomePreview} 
            key={currentColor.id} 
            typeColor={typeColor} 
            currentColor={currentColor} 
          />;
        })
      ) : (
        <h3> No hay colores <Emoji emoji='😔😔' /> </h3>
      )}
    </ColorsContainer>
  );
};

export default Colores;


Colores.propTypes = {
  typeColor: PropTypes.string.isRequired,
  colores: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(PropTypes.object).isRequired
  ]).isRequired
}