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
      {children}
      <input
        className={inputClass}
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        required={inputIsRequired}
        onInput={onInput}
      ></input>
    </form>
  );
};

export default Form;
