import propTypes from "prop-types";
import TextInputField from "../../../commonComponents/TextInputField";

const LoanAmount = ({ value, setValue, setIsValid }) => {
  const validateContactNo = (value) => RegExp(/^\d+$/).test(value);

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="LoanAmount"
      errorMessage=" required - positive values"
      validInputFn={(value) => validateContactNo(value)}
      placeholder="xxx"
      label="Loan Amount"
      type="number"
    ></TextInputField>
  );
};

LoanAmount.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default LoanAmount;
