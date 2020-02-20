import React from "react";

export const EditTextArea = ({
  id,
  name,
  formValue,
  customClassName,
  handledEvent
}) => (
  <div className="input-field col s12">
    <textarea
      name={name}
      value={formValue}
      id={id}
      type="text"
      onChange={handledEvent}
      className={customClassName}
    />
  </div>
);
