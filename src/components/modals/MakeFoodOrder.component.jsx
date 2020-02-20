/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Select from "../modals/select/selectFood.component";
import { EditTextArea } from "../food-forms/edittext/edittextTextArea.component";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        this.props.handledModalDismissed();
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>Order for Owambe</h4>
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <EditTextArea
                    formValue={this.props.formValue}
                    name="mealValue"
                    id="meal"
                    handledType="text"
                    handledEvent={this.props.handledEvent}
                    customClassName="validate materialize-textarea"
                  />
                </div>
                <div className="input-field col s6">
                  <Select key="amount" orderCategoryName="Select Quantity" />
                </div>
              </div>

              <div className="row">
                <a className="waves-effect waves-light btn">
                  Add Something else
                </a>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-red btn-flat">
              Discard
            </a>
            <a href="#" className="modal-close waves-effect waves-green btn-flat">
              Continue
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
