import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const CommonRadioButton = ({
  label,
  value,
  onChange,
  name,
  data,
  error,
  style,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={style}>
        {label}
      </FormLabel>
      <RadioGroup
        row
        value={value}
        onChange={onChange}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
      >
        {data.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          );
        })}
      </RadioGroup>

      {error && Boolean(error) && (
        <>
          <Typography
            variant="body1"
            sx={{ fontSize: 12, marginLeft: 4, color: "#d32f2f" }}
          >
            {error}
          </Typography>
        </>
      )}
    </FormControl>
  );
};

export default CommonRadioButton;
