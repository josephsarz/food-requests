import React from "react";
import { EditTextInput } from "../food-forms/edittext/edittextInput.component";
import { EditTextArea } from "../food-forms/edittext/edittextTextArea.component";

export const OrderForm = ({
  handledSubmit,
  inputChange,
  username,
  mealValue,
  amount
}) => (
  <div id="todo-add-form" className="col s10 offset-s1">
    <form onSubmit={handledSubmit}>
      <div className="row">
        <EditTextInput
          id="username"
          name="username"
          handledType="text"
          handledEvent={inputChange}
          formValue={username}
          customClassName="validate"
        />
        <EditTextArea
          formValue={mealValue}
          name="mealValue"
          id="meal"
          handledType="text"
          handledEvent={inputChange}
          customClassName="validate materialize-textarea"
        />

        <EditTextInput
          formValue={amount}
          name="amount"
          id="amount"
          handledType="number"
          handledEvent={inputChange}
          customClassName="validate"
        />

        <div className="input-field col s12">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
);
