import propTypes from "prop-types";
import { useState } from "react";
import TextInputField from "../TextInputField";

const InitialDepositAmount = ({ value, setValue, setIsValid, accountType }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const min = accountType == "Salary" ? 0 : 5000;
  const validateInitDeposit = (value) => {
    switch (accountType) {
      case "Salary":
        if (value >= 0) {
          return true;
        }
        setErrorMessage(" can't be less than 0");
        return false;
      case "Saving":
        if (value >= 5000) {
          return true;
        }
        setErrorMessage(" can't be less than 5000");
        return false;
      default:
        setErrorMessage(" Select a Account Type");
        return false;
    }
  };

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="InitialDepositAmount"
      errorMessage={` required -${errorMessage}`}
      validInputFn={(value) => validateInitDeposit(value)}
      placeholder="xxxxxxxxxxx"
      label="Initial Deposit Amount"
      type="number"
      min={min}
    ></TextInputField>
  );
};

InitialDepositAmount.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
  accountType: propTypes.string,
};
export default InitialDepositAmount;
