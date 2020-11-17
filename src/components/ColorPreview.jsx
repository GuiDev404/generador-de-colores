import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Preview = styled.div`
  width: 300px;
  height: 300px;
  margin: var(--md-space);
  border-radius: var(--sm-radius);
  position: relative;
  overflow: hidden;
  background: ${props=> props.bgColor};
`

const ColorPreview = ({ children, color }) => {
  return (
    <Preview bgColor={color}>
      {children}
    </Preview>
  )
}

export default ColorPreview

ColorPreview.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string
}