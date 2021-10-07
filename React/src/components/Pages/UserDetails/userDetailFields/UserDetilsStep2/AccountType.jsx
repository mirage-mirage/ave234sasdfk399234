import propTypes from "prop-types";
import Select from "../Select";

const AccountType = ({ value, setValue, setIsValid }) => {
  const isNotEmpty = (value) => value !== " ";

  const accountType = ["Saving", "Salary"];

  return (
    <Select
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="accountType"
      errorMessage=" required"
      validInputFn={(value) => isNotEmpty(value)}
      label="AccountType"
      options={accountType}
    />
  );
};

AccountType.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default AccountType;
