import propTypes from "prop-types";
import Select from "../../UserDetails/userDetailFields/Select";
const LoanType = ({ setValue, setIsValid, value }) => {
  return (
    <Select
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="loanType"
      label="Loan Type"
      validInputFn={(value) => value !== " "}
      options={["Education", "Personal/Home"]}
      errorMessage=" required"
    ></Select>
  );
};
LoanType.propTypes = {
  setValue: propTypes.func,
  setIsValid: propTypes.func,
  value: propTypes.string,
};
export default LoanType;
