import React from "react";

export const EditTextInput = ({ id, name, formValue, inputChange }) => (
  <div className="input-field col s12">
    <textarea
      name={formValue}
      value={formValue}
      id={id}
      type="text"
      //   onChange={inputChange}
      className="validate materialize-textarea"
    />
    <label htmlFor={id}> {name}</label>
  </div>
);
