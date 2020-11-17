import React from "react";
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

const StyledBtn = styled.button`
  min-width: 300px;
  padding: 6px 8px;
  outline: none;
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  vertical-align: middle;

  ${props => props.styles === 'btnGenerator' && css`
    margin: 0 var(--md-space);
    border: 2px solid var(--flour-green-color);
    background: transparent; 
    border-radius: var(--sm-radius);

      &:hover {
        background: var(--flour-green-color);
        color: var(--dark-color);
      }
  `}

  ${props => [props.styles].includes('addColor') && css`
    background: cornflowerblue;
    position: absolute;
    bottom: 0;
    border: none;
    border-top-left-radius: var(--sm-radius);
    border-top-right-radius: var(--sm-radius);
    color: var(--light-color);
    padding: 8px 0;
  `}
`;

const Button = ({ styles, fn, text, emoji }) => {

  return (
    <StyledBtn onClick={fn} styles={styles}>
      <Emoji emoji={emoji} /> {" "}
       {text}
    </StyledBtn>
  );
};

export default React.memo(Button);

Button.propTypes = {
  styles: PropTypes.string,
  fn: PropTypes.func,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}