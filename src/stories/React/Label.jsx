import PropTypes from "prop-types"

const Label = ({ text, styles }) => {
  return (
    <p style={styles}>{text}</p>
  )
}


Label.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
}


export default Label
