import PropTypes from "prop-types";

const Form = ({
  formClass,
  inputClass,
  handleSubmit,
  inputName,
  inputType,
  inputPlaceholder,
  inputIsRequired,
  onInput,
  children,
}) => {
  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <input
        className={inputClass}
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        required={inputIsRequired}
        onInput={onInput}
      />
      {children}
    </form>
  );
};

export default Form;

Form.propTypes = {
  formClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputIsRequired: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onInput: PropTypes.func,
  children: PropTypes.node,
};
