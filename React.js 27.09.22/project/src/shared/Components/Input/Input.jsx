import { memo } from "react";

import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  defaultValue,
  value,
  placeholder,
  required,
  onType,
  className,
  id,
  checked,
}) => {
  return (
    <input
      className={className}
      type={type}
      defaultValue={defaultValue}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onType}
      checked={checked}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onType: PropTypes.func,
  className: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(Input);
