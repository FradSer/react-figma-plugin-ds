import React from "react";

import { InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";

const InputComponent: React.FunctionComponent<InputProps> = ({
  className = "",
  type,
  defaultValue,
  placeholder,
  isDisabled,
  value,
  onChange,
}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={isDisabled}
    value={value}
    onChange={(event) => onChange && onChange(event.target.value, event)}
  />
);

const Input: React.FunctionComponent<InputWithIconProps> = ({
  className,
  type,
  icon,
  iconColor = "black3",
  defaultValue,
  placeholder,
  isDisabled,
  value,
  onChange,
}) => {
  className = className || "";
  type = type || "text";
  const inputClass = "input__field";

  if (icon) {
    return (
      <div className="input input--with-icon">
        <Icon name={icon} color={iconColor} isDisabled={isDisabled} />
        <InputComponent
          className={`${inputClass} ${className}`}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isDisabled={isDisabled}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return (
      <div className="input">
        <InputComponent
          className={`${inputClass} ${className}`}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isDisabled={isDisabled}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default Input;
