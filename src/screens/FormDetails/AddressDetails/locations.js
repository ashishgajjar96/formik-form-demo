import { State, Country, City } from "country-state-city";

export const getAllCountries = async () => {
  return Country.getAllCountries();
};

export const getStatesByCountryCode = async (countryCode) => {
  return State.getStatesOfCountry(countryCode);
};

export const getCitiesByStateCode = async (countryCode, stateCode) => {
  return City.getCitiesOfState(countryCode, stateCode);
};
