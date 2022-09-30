import { memo } from "react";

import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  defaultValue,
  placeholder,
  required,
  onType,
  className,
  id,
}) => {
  return (
    <input
      className={className}
      type={type}
      defaultValue={defaultValue}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onType}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onType: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(Input);
