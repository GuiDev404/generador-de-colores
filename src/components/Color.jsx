import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

const ColorBox = styled.div`
  display: inline-block;
  margin: var(--sm-space);
  border-radius: var(--sm-radius);
  background: ${props => props.bgcolor};
  color: var(--light-color);

  ${props => props.typecolor === 'simpleColor' && css`
    width: 175px;
    height: 100px;
  `}

  ${props => props.typecolor === 'degColor' && css`
    width: fit-content;
    height: 125px;
    font-size: 13px;
    padding: var(--sm-space);
  `}
`

const Color = ({ typeColor, currentColor, isHomePreview }) => {

  return (
    <ColorBox 
      typecolor={typeColor} 
      bgcolor={currentColor.color} 
      as={Link} 
      to={`/color/${currentColor.id}`}
    >
      {!isHomePreview && currentColor.color}
    </ColorBox>
  )
}

export default React.memo(Color)

Color.propTypes = {
  typeColor: PropTypes.string.isRequired,
  currentColor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
}