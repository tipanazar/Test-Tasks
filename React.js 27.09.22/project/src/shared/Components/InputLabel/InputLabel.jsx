import PropTypes from "prop-types";

const InputLabel = ({ className, inputId, text, style, children }) => {
  return (
    <label className={className} style={style} htmlFor={inputId}>
      {text}
      {children}
    </label>
  );
};

export default InputLabel;

InputLabel.propTypes = {
  className: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string, PropTypes.bool),
  children: PropTypes.node,
};
