import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const BranchName = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="bankName"
      errorMessage="mandatory"
      validInputFn={(value) => value !== ""}
      placeholder="Branch name"
      label="Branch name"
    ></TextInputField>
  );
};

BranchName.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default BranchName;
