import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const Citizenship = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="citizenship"
      errorMessage=" required"
      validInputFn={(value) => value !== ""}
      placeholder="citizenship"
      label="Citizenship"
    ></TextInputField>
  );
};

Citizenship.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default Citizenship;
