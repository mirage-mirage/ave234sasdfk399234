import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const RefAccHolderAddress = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="refAccHolderAddress."
      errorMessage=" required"
      validInputFn={(value) => value != ""}
      placeholder="Reference Account Holder Address"
      label="Reference Account Holder Address"
    ></TextInputField>
  );
};

RefAccHolderAddress.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default RefAccHolderAddress;
