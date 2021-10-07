import propTypes from "prop-types";
import { Fragment } from "react/cjs/react.production.min";
import { getAge } from "../../../../commonComponents/common-functions";
import ReadOnlyField from "../ReadOnly";

const CitizenStatus = ({ value, setIsValid, setValue }) => {
  let showError = "";
  if (value === "") {
    setIsValid(false);
  } else {
    const age = getAge(value);
    if (age < 18) {
      value = "Minor";
    } else {
      if (age <= 60) {
        value = "Normal";
      } else {
        value = "Senior";
      }
    }
  }
  setValue(value);

  return (
    <Fragment>
      <ReadOnlyField
        value={value}
        id="citizenship"
        placeholder="citizenship"
        label="CitizenStatus"
      />
      <span
        name="error message"
        className="text-danger"
        style={{ fontSize: "0.7rem" }}
      >
        {showError ? "* DOB required" : " "}
      </span>
    </Fragment>
  );
};

CitizenStatus.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default CitizenStatus;
