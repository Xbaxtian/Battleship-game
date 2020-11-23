import PropTypes from "prop-types"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp
