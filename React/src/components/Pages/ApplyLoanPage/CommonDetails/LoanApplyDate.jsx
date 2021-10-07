import propTypes from "prop-types";
import TextInputField from "../../../commonComponents/TextInputField";

const LoanApplyDate = ({ value, setValue, setIsValid }) => {
  const validateDOB = (value) => Date.parse(value) > Date.now();

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="loanApplyDate"
      errorMessage={" should be a future date"}
      validInputFn={(value) => validateDOB(value)}
      placeholder="Loan ApplyDate"
      label="Loan Apply Date"
      type="date"
    ></TextInputField>
  );
};

LoanApplyDate.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default LoanApplyDate;
