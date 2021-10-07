import propTypes from "prop-types";
import ReadOnlyField from "../ReadOnly";
const RegistrationDate = ({ value }) => {
  const date = `${
    value.getDate() < 10 ? "0" + value.getDate() : value.getDate()
  }/${
    value.getMonth() < 10 ? "0" + value.getMonth() : value.getMonth()
  }/${value.getFullYear()}`;
  return (
    <ReadOnlyField
      id="i_regDate"
      value={date}
      placeholder="Registration Date"
      label="Registration Date"
    ></ReadOnlyField>
  );
};
RegistrationDate.propTypes = {
  setValue: propTypes.func,
  value: propTypes.any,
  setIsValid: propTypes.func,
};
export default RegistrationDate;
