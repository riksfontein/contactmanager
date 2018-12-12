import React from "react";
import classnames from "classnames";

const TextInputGroup = ({
  name,
  label,
  value,
  onChange,
  type,
  placeholder,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
