/* eslint-disable no-unused-vars */
export const isValidName = (name) => {
  return RegExp(/^[A-Za-z ]+$/).test(name);
};
export const ActionType = {
  UpdateValue: "UpdateValue",
  UpdateIsValidity: "UpdateIsValidity",
  Touched: "Touched",
};

export const inputFieldReducerFn = (state, action) => {
  switch (action.type) {
    case ActionType.UpdateValue: {
      return {
        ...state,
        value: action.value,
        isTouched: true,
      };
    }
    case ActionType.Touched: {
      return {
        ...state,
        isTouched: true,
      };
    }
    case ActionType.UpdateIsValidity: {
      const valid = action.validateFn(state.value);
      return {
        ...state,
        isValid: valid,
      };
    }

    default:
      return state;
  }
};

export const structureUserDetails = (data) => {
  const personal = {
    address: data.address,
    contactNo: data.contactNo,
    guardianName: data.guardianName,
    guardianType: data.guardianType,
    dob: data.dob !== null ? data.dob.substring(0, 10) : null,
    citizenship: data.citizenship,
    gender: data.gender,
    maritalStatus: data.maritalStatus,
    country: data.country,
    state: data.state,
    citizenStatus: data.citizenStatus,
    name: data.name,
    email: data.email,
  };
  const bank = {
    accountType: data.accountType,
    accountNumber: data.accountNumber,
    branchName: data.branchName,
    idDocumentNo: data.idDocumentNo,
    idProofType: data.idProofType,
    initialDepositAmount: data.initialDepositAmount,
    isProfileComplete: data.isProfileComplete,
    refAccHolderAccNo: data.refAccHolderAccNo,
    refAccHolderAddress: data.refAccHolderAddress,
    refAccHolderName: data.refAccHolderName,
    registrationDate: data.registrationDate,
  };
  return {
    personal: personal,
    bank: bank,
  };
};
