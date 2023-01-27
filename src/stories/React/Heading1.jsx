import PropTypes from "prop-types"

const Heading1 = ({ text, styles }) => {
  return (
    <h1 style={styles}>{text}</h1>
  )
}


Heading1.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
}


export default Heading1
