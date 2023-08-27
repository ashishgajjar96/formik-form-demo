import React from "react";
import WrapperComponent from "../../../components/WrapperComponent";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const UserFinalData = () => {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <WrapperComponent>
      <Box>
        <Typography
          sx={{ fontSize: { md: "50px", sm: "20px" } }}
          color="#43b012"
          id="tableTitle"
          component="div"
        >
          Data added successfully
        </Typography>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Grid container spacing={0}>
                    <Grid item xs={6}>
                      Name
                    </Grid>
                    <Grid item xs={6}>
                      Values
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(userDetails).map((item) => (
                <TableRow
                  key={item}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Grid container spacing={0}>
                      <Grid item xs={6} sx={{ textTransform: "capitalize" }}>
                        {item}:
                      </Grid>
                      <Grid item xs={6}>
                        {userDetails[item]}
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </WrapperComponent>
  );
};

export default UserFinalData;
