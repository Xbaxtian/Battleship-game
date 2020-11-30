import PropTypes from 'prop-types'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

const styles = {
  overlay: {
    backgroundColor: 'rgba(107, 114, 128, 0.75)',
  }
}

const GameOverModal = ({ children, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      className="bg-white rounded-lg shadow-xl absolute transform -translate-x-1/2 translate-y-1/2 left-1/2 transition-all sm:max-w-lg sm:w-full"
      style={styles}
    >
      {children}
    </Modal>
  )
}

GameOverModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default GameOverModal
