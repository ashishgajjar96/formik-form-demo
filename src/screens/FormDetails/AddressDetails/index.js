import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Box, Grid } from "@mui/material";

import WrapperComponent from "../../../components/WrapperComponent";
import CommonTextField from "../../../components/CommonTextField";
import SolidButton from "../../../components/SolidButton";
import { setUserField } from "../../../redux/userDetails/userSlice";
import {
  getAllCountries,
  getStatesByCountryCode,
  getCitiesByStateCode,
} from "./locations";
import CommomSelectField from "../../../components/CommomSelectField";

const addressValidationSchema = Yup.object().shape({
  address1: Yup.string()
    .min(2, "AddressLine1 is Too Short!")
    .max(50, "AddressLine1 is Too Long!")
    .required("AddressLine1 is a required field"),
  address2: Yup.string()
    .min(2, "AddressLine2 id Too Short!")
    .max(50, "AddressLine2 is Too Long!")
    .required("AddressLine2 is a required field"),
  city: Yup.string().required("City is a required field"),
  state: Yup.string().required("State is a required field"),
  country: Yup.string().required("Country is a required field"),
  pincode: Yup.string().required("PinCode is a required field"),
});

const AddressDetails = ({ handleBack, handleNext, activeStep }) => {
  const dispatch = useDispatch();

  const [allCountries, setAllCountries] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [countryCode, setCountryCode] = useState("");

  const fetchCitiesByStates = async (stateCode) => {
    const dataNew = await getCitiesByStateCode(countryCode, stateCode);
    setAllCities(dataNew);
  };

  const fetchStatesByCountry = async (value) => {
    setCountryCode(value);
    setAllStates(await getStatesByCountryCode(value));
  };

  const getCountry = async () => {
    const dataNew = await getAllCountries();
    setAllCountries(dataNew);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const formik = useFormik({
    initialValues: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    validationSchema: addressValidationSchema,
    onSubmit: (values) => {
      const countryDetails = allCountries.find(
        (item) => item.isoCode === values.country
      );
      const stateDetails = allStates.find(
        (item) => item.isoCode === values.state
      );
      values.country = countryDetails?.name || values.country;
      values.state = stateDetails?.name || values.state;
      dispatch(setUserField(values));
      handleNext(values);
    },
  });

  return (
    <WrapperComponent>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12} sm={12}>
              <CommonTextField
                id="address1"
                name="address1"
                type="text"
                label="Address Line 1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address1}
                error={
                  formik.touched.address1 && Boolean(formik.errors.address1)
                }
                helperText={
                  formik.touched.address1 && formik.errors.address1 ? (
                    <div>{formik.errors.address1}</div>
                  ) : null
                }
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <CommonTextField
                id="address2"
                name="address2"
                type="text"
                label="Address Line 2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address2}
                error={
                  formik.touched.address2 && Boolean(formik.errors.address2)
                }
                helperText={
                  formik.touched.address2 && formik.errors.address2 ? (
                    <div>{formik.errors.address2}</div>
                  ) : null
                }
              />
            </Grid>

            <Grid item md={6} xs={12} sm={12}>
              <CommomSelectField
                label="Country"
                name="country"
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                  fetchStatesByCountry(e.target.value);
                }}
                value={formik.values.country}
                touched={formik.touched.country}
                error={formik.errors.country}
                data={allCountries.map((item) => ({
                  id: item.isoCode,
                  name: item.name,
                }))}
                style={{
                  color:
                    formik.touched.country && formik.errors.country
                      ? "#d32f2f"
                      : undefined,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <CommomSelectField
                label="State"
                name="state"
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                  fetchCitiesByStates(e.target.value);
                }}
                value={formik.values.state}
                touched={formik.touched.state}
                error={formik.errors.state}
                data={allStates.map((item) => ({
                  id: item.isoCode,
                  name: item.name,
                }))}
                style={{
                  color:
                    formik.touched.state && formik.errors.state
                      ? "#d32f2f"
                      : undefined,
                }}
              />
            </Grid>

            <Grid item md={6} xs={12} sm={12}>
              <CommomSelectField
                label="City"
                name="city"
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.city}
                touched={formik.touched.city}
                error={formik.errors.city}
                data={allCities.map((item) => ({
                  id: item.name,
                  name: item.name,
                }))}
                style={{
                  color:
                    formik.touched.city && formik.errors.city
                      ? "#d32f2f"
                      : undefined,
                }}
              />
            </Grid>

            <Grid item md={6} xs={12} sm={12}>
              <CommonTextField
                id="pincode"
                name="pincode"
                type="text"
                label="Pin Code"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.pincode}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={
                  formik.touched.pincode && formik.errors.pincode ? (
                    <div>{formik.errors.pincode}</div>
                  ) : null
                }
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

export default AddressDetails;
