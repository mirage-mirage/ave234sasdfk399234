import propTypes from "prop-types";
import TextInputField from "../TextInputField";
import { isValidName } from "../../../../commonComponents/common-functions";

const Name = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="Name"
      errorMessage=" required- only alphabets and spaces allowed"
      validInputFn={(value) => isValidName(value)}
      placeholder="Name"
      label="Name"
    ></TextInputField>
  );
};

Name.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default Name;
