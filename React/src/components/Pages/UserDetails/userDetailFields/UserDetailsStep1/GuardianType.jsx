import propTypes from "prop-types";
import TextInputField from "../TextInputField";
import { isValidName } from "../../common-functions";

const GuardianType = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="guardianType"
      errorMessage=" required- only alphabets and spaces allowed"
      validInputFn={(value) => isValidName(value)}
      placeholder="Guardian Type"
      label="Guardian Type"
    ></TextInputField>
  );
};

GuardianType.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default GuardianType;
