import PropTypes from 'prop-types'
import { memo } from 'react'

const Label = ({ children }) => {
  return (
    <h3 className="text-xl">{children}</h3>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Label)
