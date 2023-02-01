
import PropTypes from "prop-types"

function Button({ label, backgroundColor, type = "primary", scale=1, handleClick }) {
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "disabled"]),
  scale: PropTypes.number,
  handleClick: PropTypes.func,
}

export default Button
