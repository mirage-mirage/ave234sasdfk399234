import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const IdDocumentNo = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="isProofNumber"
      errorMessage=" required"
      validInputFn={(value) => value !== ""}
      placeholder="ID proof Number "
      label="ID proof Number"
    ></TextInputField>
  );
};

IdDocumentNo.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default IdDocumentNo;
