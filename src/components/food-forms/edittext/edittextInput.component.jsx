import React from "react";

export const EditTextInput = ({
  id,
  name,
  handledType,
  formValue,
  customClassName,
  handledEvent
}) => (
  <div className="input-field col s12">
    <input
      value={formValue}
      name={name}
      id={id}
      type={handledType}
      onChange={handledEvent}
      className={customClassName}
    />
    <label htmlFor={id}> {name}</label>
  </div>
);
