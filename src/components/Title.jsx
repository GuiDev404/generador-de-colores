import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const PageTitle = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: calc(var(--padding) - 5px);
  margin: var(--space) 0;
  width: 100%;
  font-size: ${(props=> props.fontSize)}px;
  font-weight: bolder;
  text-align: ${(props)=> props.side ? 'left' : 'center'};
`

const Title = ({ content, fontSize, side }) => {
  return (
    <PageTitle fontSize={fontSize} side={side}>
      {content}
    </PageTitle>
  )
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
  fontSize: PropTypes.number
}

export default React.memo(Title)