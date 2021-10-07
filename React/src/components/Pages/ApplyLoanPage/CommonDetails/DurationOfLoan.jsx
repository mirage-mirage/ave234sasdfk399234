import propTypes from "prop-types";
import Select from "../../UserDetails/userDetailFields/Select";
const DurationOfLoan = ({ setValue, setIsValid, value }) => {
  return (
    <Select
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="DurationOfLoan"
      label="Loan Duration in Years"
      validInputFn={(value) => value !== " "}
      options={["5", "10", "15", "20"]}
      errorMessage=" required"
    ></Select>
  );
};
DurationOfLoan.propTypes = {
  setValue: propTypes.func,
  setIsValid: propTypes.func,
  value: propTypes.string,
};
export default DurationOfLoan;
