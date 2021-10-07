import propTypes from "prop-types";
import TextInputField from "../../../commonComponents/TextInputField";

const InputNumber = ({ value, setValue, setIsValid, label, isDecimal }) => {
  const isValidNumber = (value) => RegExp(/^[0-9]+$/).test(value);
  const isValidDecimal = (value) => RegExp(/^[0-9]+.[0-9]+$/).test(value);
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id={label}
      errorMessage={` required- Type: ${
        isDecimal ? "decimal" : "whole"
      } number`}
      validInputFn={isDecimal ? isValidDecimal : isValidNumber}
      placeholder={label}
      label={label}
      type="number"
    ></TextInputField>
  );
};

InputNumber.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  label: propTypes.string,
  setIsValid: propTypes.func,
  isDecimal: propTypes.bool,
};
export default InputNumber;
