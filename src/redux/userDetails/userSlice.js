import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserField: (state, { payload }) => {
      state.userDetails = {
        ...state.userDetails,
        ...payload,
      };
    },
    resetUserField: (state) => {
      state.userDetails = {};
    }
  },
});

export const { setUserField, resetUserField } = userSlice.actions;

export default userSlice.reducer;