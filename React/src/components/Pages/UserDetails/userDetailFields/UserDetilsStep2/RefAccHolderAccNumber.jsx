import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const isValidNumber = (val) => RegExp(/^\d+$/).test(val);

const RefAccHolderAccNumber = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="refAccHolderAccNumber."
      errorMessage=" required only digits"
      validInputFn={(value) => isValidNumber(value)}
      placeholder="Reference Account Holder Account Number"
      label="Reference Account Holder Account Number"
    ></TextInputField>
  );
};

RefAccHolderAccNumber.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default RefAccHolderAccNumber;
