import React from "react";
import Button from "@mui/material/Button";

const SolidButton = ({
  variant,
  color,
  onClick,
  className,
  children,
  value,
  disabled,
  type,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
      value={value}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
};

export default SolidButton;
