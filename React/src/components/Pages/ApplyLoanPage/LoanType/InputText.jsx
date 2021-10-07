import propTypes from "prop-types";
import TextInputField from "../../../commonComponents/TextInputField";
import { isValidName } from "../../../commonComponents/common-functions";

const InputText = ({ value, setValue, setIsValid, label }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id={label}
      errorMessage={" required- only alphabets and space allowed"}
      validInputFn={isValidName}
      placeholder={label}
      label={label}
    ></TextInputField>
  );
};

InputText.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  label: propTypes.string,
  setIsValid: propTypes.func,
};
export default InputText;
