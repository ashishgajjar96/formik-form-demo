import React from "react";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";

const CommonTextField = ({
  label,
  variant,
  value,
  onChange,
  className,
  id,
  name,
  type,
  onBlur,
  helperText,
  error,
  onFocus,
}) => {
  return (
    <TextField
      id={id}
      name={name}
      type={type}
      fullWidth
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      className={className}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error} // Pass the error prop to indicate an error state
      helperText={
        <FormHelperText style={{ color: "#d32f2f" }}>
          {helperText}
        </FormHelperText>
      }
    />
  );
};

export default CommonTextField;