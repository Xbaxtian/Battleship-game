import PropTypes from 'prop-types'
import { memo } from 'react'

const Label = ({ children, className }) => {
  return (
    <h3 className={`text-xl ${className}`}>{children}</h3>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Label.defaultProps = {
  className: '',
}

export default memo(Label)
