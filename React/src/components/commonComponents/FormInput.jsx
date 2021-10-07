import propTypes from "prop-types";
const FormInput = ({
  isValid,
  isTouched,
  value,
  onBlur,
  onChange,
  errorMessage,
  label,
  placeholder,
  id,
  type,
  max,
  min,
}) => {
  return (
    <div className={` ${isTouched && !isValid ? "mb-0" : "mb-4"}`}>
      <div className="form-floating">
        <input
          type={type}
          id={`i_${id}`}
          placeholder={placeholder}
          className={`form-control ${
            isTouched ? (isValid ? "bg-success " : "bg-danger ") : ""
          }bg-opacity-10`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          max={max}
          min={min}
        ></input>
        <label htmlFor={`i_${id}`}>{label}</label>
      </div>
      <span
        name="error message"
        className="text-danger"
        style={{ fontSize: "0.7rem" }}
      >
        {isTouched && !isValid ? `*${errorMessage}` : " "}
      </span>
    </div>
  );
};
FormInput.propTypes = {
  type: propTypes.string,
  value: propTypes.any,
  isTouched: propTypes.bool,
  isValid: propTypes.bool,
  onChange: propTypes.func,
  errorMessage: propTypes.string,
  onBlur: propTypes.func,
  placeholder: propTypes.string,
  label: propTypes.string,
  id: propTypes.any,
  max: propTypes.any,
  min: propTypes.any,
};
export default FormInput;
