import { Box } from "@mui/material";
import React from "react";

const WrapperComponent = ({ children, backgroundColor }) => {
  const wrapperStyle = {
    minHeight: "auto",
    padding: {
      xl: "40px",
      sm: "20px",
      xs: "0px",
      md: "40px",
      lg: "40px",
    },
    marginTop: { xl: "0px", sm: "0px", xs: "10px", md: "0px", lg: "0px" },
    backgroundColor: backgroundColor || "",
    minHeight: "70vh",
  };

  return <Box sx={wrapperStyle}>{children}</Box>;
};

export default WrapperComponent;
