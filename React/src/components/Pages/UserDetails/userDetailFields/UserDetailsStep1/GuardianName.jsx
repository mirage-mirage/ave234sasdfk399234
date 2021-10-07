import propTypes from "prop-types";
import TextInputField from "../TextInputField";
import { isValidName } from "../../../../commonComponents/common-functions";

const GuardianName = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="GuardianName"
      errorMessage=" required- only alphabets and spaces allowed"
      validInputFn={(value) => isValidName(value)}
      placeholder="GuardianName"
      label="Guardian Name"
    ></TextInputField>
  );
};

GuardianName.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default GuardianName;
