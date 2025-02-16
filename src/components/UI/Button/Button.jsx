import React from "react";
import "./button.css";

const Button = ({
  type = "button",
  onClick,
  disabled,
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;