import PropTypes from 'prop-types'

const Button = ({ label, type, onClick }) => {
  return (
    <button
      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
}

Button.defaultProps = {
  onClick: null,
  type: 'button',
}

export default Button
