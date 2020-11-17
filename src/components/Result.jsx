import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Result = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  & div.result_preview {
    flex-basis: 25%;
  }

  & section.result_colors {
    flex-basis: 75%;
    display: flex;
    flex-flow: row wrap;
    min-height: 50vh;
  }

  & p {
    text-align: center;
    color: #d83636;
  }
`;

const ResultColors = ({ children }) => {
  return <Result>
     {children}
  </Result>
}

ResultColors.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default ResultColors
