import propTypes from "prop-types";
import TextInputField from "../../../commonComponents/TextInputField";

const LoanIssueDate = ({ value, setValue, setIsValid }) => {
  const validateDOB = (value) => Date.parse(value) > Date.now();

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="loanIssueDate"
      errorMessage={" should be a future date"}
      validInputFn={(value) => validateDOB(value)}
      placeholder="Loan issue Date"
      label="Loan Issue Date"
      type="date"
    ></TextInputField>
  );
};

LoanIssueDate.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default LoanIssueDate;
