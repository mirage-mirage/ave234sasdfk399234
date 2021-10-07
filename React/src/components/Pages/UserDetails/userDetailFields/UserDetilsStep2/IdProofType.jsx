import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const IdProofType = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="isProofType"
      errorMessage=" required"
      validInputFn={(value) => value !== ""}
      placeholder="ID proof type "
      label="ID proof type "
    ></TextInputField>
  );
};

IdProofType.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default IdProofType;
