import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  personal: {
    address: null,
    contactNo: null,
    guardianName: null,
    guardianType: null,
    dob: null,
    citizenship: null,
    gender: null,
    maritalStatus: null,
    country: null,
    state: null,
    citizenStatus: null,
    name: null,
    email: null,
  },
  bank: {
    accountType: null,
    branchName: null,
    idDocumentNo: null,
    idProofType: null,
    initialDepositAmount: null,
    isProfileComplete: false,
    refAccHolderAccNo: null,
    refAccHolderAddress: null,
    refAccHolderName: null,
    registrationDate: null,
  },
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    updateBankDetails(state, action) {
      state.bank = action.payload;
    },
    updatePersonalDetails(state, action) {
      state.personal = action.payload;
    },
    updateDetails(state, action) {
      fetch(`https://localhost:44329/api/CustomerDetails/${action.payload}`, {
        method: "PUT",
        body: JSON.stringify({
          ...state.personal,
          ...state.bank,
          customerId: action.payload,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    clearData(state) {
      // eslint-disable-next-line no-unused-vars
      state.personal = null;
      state.bank = { isProfileComplete: false };
    },
  },
});

export const { updateBankDetails, updatePersonalDetails } = userSlice.actions;

export default userSlice.reducer;
