import propTypes from "prop-types";

const SelectInput = ({
  isValid,
  isTouched,
  value,
  onBlur,
  onChange,
  errorMessage,
  label,
  id,
  children,
  disabled,
}) => {
  return (
    <div className={` ${isTouched && !isValid ? "mb-0" : "mb-4"}`}>
      <div className="form-floating">
        <select
          id={`i_${id}`}
          disabled={disabled}
          className={`form-select ${
            isTouched
              ? isValid
                ? "bg-success "
                : "bg-danger "
              : value !== null
              ? "bg-info"
              : "bg-info"
          }bg-opacity-10`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {children}
        </select>
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
SelectInput.propTypes = {
  value: propTypes.any,
  isTouched: propTypes.bool,
  isValid: propTypes.bool,
  onChange: propTypes.func,
  errorMessage: propTypes.string,
  onBlur: propTypes.func,
  label: propTypes.string,
  id: propTypes.any,
  children: propTypes.any,
  disabled: propTypes.bool,
};
export default SelectInput;
