import React from "react";
import Select from "../../modals/select/selectFood.component";
import { EditTextArea } from "../../food-forms/edittext/edittextTextArea.component";

const FoodRow = props => (
  <div className="row">
    <div className="input-field col s6">
      <EditTextArea
        formValue={props.formValue}
        id={"n" + props.id}
        name="mealValue"
        handledType="text"
        handledEvent={props.handledEvent}
        customClassName=" materialize-textarea"
      />
    </div>
    <div className="input-field col s3">
      <Select key="amount" orderCategoryName="Select Quantity" />
    </div>
    <div className="input-field col s3">
      <button className=" waves-effect waves-red btn-flat" key="amount">
        Remove
      </button>
    </div>
  </div>
);

export default FoodRow;
