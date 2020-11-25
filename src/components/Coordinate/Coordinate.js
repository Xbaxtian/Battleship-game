import { useState } from 'react'
import PropTypes from 'prop-types'

const shootStyles = {
  hidden: 'bg-gray-500',
  miss: 'bg-red-700',
  hit: 'bg-green-300',
};

const Coordinate = ({ x, y, handleShoot }) => {
  const [focus, setFocus] = useState('hidden')

  const clicked = () => {
    const result = handleShoot(x, y);
    setFocus(result)
  };

  return (
    <div
      className={`w-full h-full ${shootStyles[focus]}`}
      onClick={clicked}
      role="button"
      tabIndex="0"
      aria-hidden="true"
    />
  )
}

Coordinate.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  handleShoot: PropTypes.func.isRequired,
}


export default Coordinate
