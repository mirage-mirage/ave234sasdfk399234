import propTypes from "prop-types";
import TextInputField from "../TextInputField";
import { isValidEmail } from "../../../../commonComponents/common-functions";

const Email = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="Email"
      errorMessage=" required - valid Email "
      validInputFn={(value) => isValidEmail(value)}
      placeholder="Email"
      label="Email"
      type="email"
    ></TextInputField>
  );
};

Email.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default Email;
