import propTypes from "prop-types";
const ReadOnlyField = ({ value, id, label, placeholder, type }) => {
  return (
    <div className="mb-4">
      <div className="form-floating">
        <input
          id={`i_${id}`}
          type={type || "text"}
          value={value}
          readOnly
          className="form-control bg-secondary bg-opacity-50 "
          placeholder={placeholder}
        ></input>
        <label htmlFor={`i_${id}`}>{label}</label>
      </div>
    </div>
  );
};
ReadOnlyField.propTypes = {
  value: propTypes.any,
  label: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
};
export default ReadOnlyField;
