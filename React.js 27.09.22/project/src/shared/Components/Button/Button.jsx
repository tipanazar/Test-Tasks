import { memo } from "react";

import PropTypes from "prop-types";

const Button = ({ onClick, type, className, children, form }) => {
  return (
    <button className={className} type={type} onClick={onClick} form={form}>
      {children}
    </button>
  );
};

export default memo(Button);
// export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  form: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
