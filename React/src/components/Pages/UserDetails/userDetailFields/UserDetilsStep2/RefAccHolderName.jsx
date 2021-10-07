import propTypes from "prop-types";
import TextInputField from "../TextInputField";
import { isValidName } from "../../common-functions";

const RefAccHolderName = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="refAccHolderName."
      errorMessage=" required - alphabets and spaces allowed"
      validInputFn={(value) => isValidName(value)}
      placeholder="Reference Account Holder Name"
      label="Reference Account Holder Name"
    ></TextInputField>
  );
};

RefAccHolderName.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default RefAccHolderName;
