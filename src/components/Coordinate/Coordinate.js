import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const shootStyles = {
  hidden: 'bg-gray-500',
  miss: 'bg-red-700',
  hit: 'bg-green-300',
};

const Coordinate = ({ x, y, handleShoot, status }) => {
  const [focus, setFocus] = useState(status)

  const clicked = () => {
    const result = handleShoot(x, y, focus !== 'hidden');
    if (result)
      setFocus(result)
  };

  useEffect(() => {
    setFocus(status)
  }, [status])

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
  status: PropTypes.string,
}

Coordinate.defaultProps = {
  status: 'hidden',
}

export default Coordinate
