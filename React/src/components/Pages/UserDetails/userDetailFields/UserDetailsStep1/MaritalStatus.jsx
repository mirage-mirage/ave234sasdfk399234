import propTypes from "prop-types";
import { isValidName } from "../../common-functions";
import TextInputField from "../TextInputField";

const MaritalStatus = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="maritalStatus"
      errorMessage="mandatory"
      validInputFn={(value) => isValidName(value)}
      placeholder="Marital status"
      label="Marital status"
    ></TextInputField>
  );
};

MaritalStatus.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default MaritalStatus;
