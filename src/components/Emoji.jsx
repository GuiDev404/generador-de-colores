import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ emoji, cantidad }) => {
  return (
    <span role="img" aria-label='emoji'> 
      {Array(cantidad).fill('').map(item=> item = emoji )}
    </span> 
  )
}

export default React.memo(Emoji);


Emoji.defaultProps = {
  cantidad: 1
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  cantidad: PropTypes.number
}