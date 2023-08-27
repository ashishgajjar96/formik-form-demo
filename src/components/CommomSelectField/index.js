import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const CommomSelectField = ({
  label,
  onBlur,
  value,
  onChange,
  name,
  data,
  error,
  style,
  touched,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-helper-label" style={style}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label={label}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        value={value}
        error={touched && Boolean(error)}
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText style={{ color: "#d32f2f" }}>
        {touched && error ? <div>{error}</div> : null}
      </FormHelperText>
    </FormControl>
  );
};

export default CommomSelectField;
