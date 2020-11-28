import PropTypes from 'prop-types'

const Button = ({ label, onClick }) => {
  return (
    <button
      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      type="button"
      onClick={onClick}
    >
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: null,
}

export default Button
