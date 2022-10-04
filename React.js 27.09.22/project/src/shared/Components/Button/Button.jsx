import { memo } from "react";

import PropTypes from "prop-types";

const Button = ({
  onClick,
  type,
  className,
  children,
  form,
  id,
  disabled,
  style,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      form={form}
      id={id}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default memo(Button);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  form: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
