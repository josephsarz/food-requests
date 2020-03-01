/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css";
import _ from "lodash";
import "materialize-css/dist/css/materialize.min.css";
import FoodRow from "./foodRow/foodRow.component";

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      foodRows: [{ id: this.generateID() }],
      foodOrders: []
    };
  }

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

  handleSubmit = e => {
    e.preventDefault();
  };

  AddNewRow = () => {
    const newOrder = this.state.foodRows;
    newOrder.push({ id: this.generateID() });
    console.log("adding row", newOrder);
    this.setState(newOrder);
  };

  calculateUserFood = () => {
    const items = this.state.foodOrders;
    let th = "";

    items.forEach(e => (th += e.mealValue + "\n"));

    return th;
  };

  handleEvent = props => {
    const id = props.target.id;
    const value = props.target.value;

    const FO = this.state.foodOrders;
    var item = { id: id, mealValue: value };

    this.pushToArray(FO, item);

    this.setState({
      foodOrders: FO
    });
  };

  pushToArray(arr, obj) {
    const index = arr.findIndex(e => e.id === obj.id);
    console.log("push_index", index);
    if (index === -1) {
      arr.push(obj);
    } else {
      arr[index] = obj;
    }
    console.log("array", arr);
  }

  generateID = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  render() {
    const { foodRows } = this.state;
    console.log("data", foodRows);

    const orders = _.map(foodRows, ({ id }) => {
      return <FoodRow key={id} id={id} handledEvent={this.handleEvent} />;
    });

    console.log("order", orders);
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal modal-fixed-footer"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <div className="row col s12">
              <h4 className="col s6">Order for Owambe</h4>

              <h4 className="col s6">Recent order</h4>
            </div>

            <form onSubmit={this.handleSubmit} className="col s12">
              <div id="food-rows" className="content-container">
                <div
                  style={{
                    marginLeft: 8
                  }}
                >
                  {orders}
                  <button
                    onClick={this.AddNewRow}
                    className="waves-effect waves-light btn"
                  >
                    Add Something else
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button className="modal-close waves-effect waves-red btn-flat">
              Discard
            </button>
            <button
              onClick={() =>
                this.props.submitOrder({
                  mealValue: this.calculateUserFood(),
                  amount: 200,
                  username: "annonymous_fish"
                })
              }
              className="modal-close waves-effect waves-green btn-flat"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
