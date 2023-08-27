import React, { useState } from "react";
import WrapperComponent from "../../../components/WrapperComponent";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserField } from "../../../redux/userDetails/userSlice";
import CommonTextField from "../../../components/CommonTextField";
import { useFormik } from "formik";
import SolidButton from "../../../components/SolidButton";
import * as Yup from "yup";
import { bloodGroup, genderData, maritalStatusData } from "../../../utils";
import CommonRadioButton from "../../../components/CommonRadioButton";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "FirstName is Too Short!")
    .max(10, "FirstName is Too Long!")
    .required("FirstName is a required field"),
  middleName: Yup.string()
    .min(2, "MiddleName id Too Short!")
    .max(50, "MiddleName is Too Long!")
    .required("MiddleName is a required field"),
  lastName: Yup.string()
    .min(2, "LastName is Too Short!")
    .max(50, "LastName is Too Long!")
    .required("LastName is a required field"),
  mobileNumber: Yup.string()
    .min(10, "MobileNumber is must ne a 10 digit!")
    .max(11, "MobileNumber is Too Long!")
    .required("MobileNumber is a required field"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is a required feild"),
  birthDay: Yup.string().required("BirthDay is a required field"),
  age: Yup.string().required("Age is a required field"),
  bloodGroup: Yup.string().required("BloodGroup is a required field"),
  height: Yup.string().required("Height is a required field"),
  weight: Yup.string().required("Weight is a required field"),
  gender: Yup.string().required("Please Select your Gender"),
  maritalStatus: Yup.string().required("Please Select Marital Status"),
});

const UserInformation = ({ handleBack, handleNext, activeStep }) => {
  const [inputType, setInputType] = useState("text");

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      birthDay: "",
      age: "",
      bloodGroup: "",
      height: "",
      weight: "",
      gender: "",
      maritalStatus: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(setUserField(values));
      handleNext(values);
    },
  });
  return (
    <WrapperComponent>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="firstName"
                name="firstName"
                type="text"
                label="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={
                  formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="middleName"
                name="middleName"
                type="text"
                label="Middle Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.middleName}
                error={
                  formik.touched.middleName && Boolean(formik.errors.middleName)
                }
                helperText={
                  formik.touched.middleName && formik.errors.middleName ? (
                    <div>{formik.errors.middleName}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="lastName"
                name="lastName"
                type="text"
                label="Last Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={
                  formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                label="Mobile Number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.mobileNumber}
                error={
                  formik.touched.mobileNumber &&
                  Boolean(formik.errors.mobileNumber)
                }
                helperText={
                  formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                    <div>{formik.errors.mobileNumber}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="email"
                name="email"
                type="email"
                label="Email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="birthDay"
                name="birthDay"
                type={inputType}
                onFocus={() => setInputType("date")}
                label="BirthDay"
                onBlur={() => setInputType("text")}
                onChange={formik.handleChange}
                value={formik.values.birthDay}
                error={
                  formik.touched.birthDay && Boolean(formik.errors.birthDay)
                }
                helperText={
                  formik.touched.birthDay && formik.errors.birthDay ? (
                    <div>{formik.errors.birthDay}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="age"
                name="age"
                type="text"
                label="Age"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.age}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={
                  formik.touched.age && formik.errors.age ? (
                    <div>{formik.errors.age}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  style={{
                    color:
                      formik.touched.bloodGroup && formik.errors.bloodGroup
                        ? "#d32f2f"
                        : undefined,
                  }}
                >
                  Blood Group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Blood Group"
                  onBlur={formik.handleBlur}
                  name="bloodGroup"
                  onChange={formik.handleChange}
                  value={formik.values.bloodGroup}
                  error={
                    formik.touched.bloodGroup &&
                    Boolean(formik.errors.bloodGroup)
                  }
                >
                  {bloodGroup.map((item) => (
                    <MenuItem key={item.id} value={item.group}>
                      {item.group}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText style={{ color: "#d32f2f" }}>
                  {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                    <div>{formik.errors.bloodGroup}</div>
                  ) : null}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="height"
                name="height"
                type="text"
                label="Height"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.height}
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={
                  formik.touched.height && formik.errors.height ? (
                    <div>{formik.errors.height}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonTextField
                id="weight"
                name="weight"
                type="text"
                label="Weight"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.weight}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={
                  formik.touched.weight && formik.errors.weight ? (
                    <div>{formik.errors.weight}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12} xl={6} lg={6}>
              <CommonRadioButton
                name="gender"
                label="Gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                data={genderData}
                error={formik.errors.gender}
                style={{
                  color:
                    formik.touched.gender && formik.errors.gender
                      ? "#d32f2f"
                      : undefined,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <CommonRadioButton
                name="maritalStatus"
                label="Marital Status"
                value={formik.values.maritalStatus}
                onChange={formik.handleChange}
                data={maritalStatusData}
                error={formik.errors.maritalStatus}
                style={{
                  color:
                    formik.touched.maritalStatus && formik.errors.maritalStatus
                      ? "#d32f2f"
                      : undefined,
                }}
              />
            </Grid>
          </Grid>
          <Grid container mt={2} spacing={2}>
            <Grid item md={2} xs={12} sm={2} xl={1} lg={1}>
              <SolidButton
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </SolidButton>
            </Grid>
            <Grid item md={2} xs={12} sm={2} xl={1} lg={1}>
              <SolidButton variant="contained" type="submit">
                Next
              </SolidButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </WrapperComponent>
  );
};

export default UserInformation;
