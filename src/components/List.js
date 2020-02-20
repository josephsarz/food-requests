/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import FoodItem from "../components/food-items/foodItem.component";
import "./style.css";
import Modal from "../components/modals/MakeFoodOrder.component";
import Cart from "./cart/cart";
class List extends Component {
  state = {
    showForm: false,
    display: false,
    width: 250
  };

  inputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  addedFormDismissed = () => {
    this.setState({ showForm: false });
  };

  formSubmit = event => {
    const { mealValue } = this.state;
    const { username } = this.state;
    const { amount } = this.state;
    const { addOrder } = this.props;
    event.preventDefault();
    addOrder({ username: username, meal: mealValue, amount: amount });
    this.setState({
      mealValue: "",
      username: "",
      amount: ""
    });
  };

  renderForm = () => {
    const { showForm } = this.state;

    if (showForm) {
    }
  };

  renderToDo() {
    const { data } = this.props;
    const orders = _.map(data, (value, key) => {
      return <FoodItem key={key} orderId={key} order={value} />;
    });
    if (!_.isEmpty(orders)) {
      return orders;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>No Food Request!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchOrders();
  }

  render() {
    const { showForm, mealValue, username, amount } = this.state;

    return (
      <React.Fragment>
        <div id="main" className="container-fluid">
          <nav>
            <div className="nav-wrapper black">
              <a href="#" className="brand-logo">
                Food Orders
              </a>
              <ul id="nav-mobile" className="right">
                <Cart />
              </ul>
            </div>
          </nav>
        </div>

        <div className="container-fluid">
          <div className="row"></div>
        </div>

        <div className="to-do-list-container">
          <div className="row">
            {this.renderToDo()}
            {
              <Modal
                formValue={mealValue}
                handledEvent={this.inputChange}
                handledModalDismissed={this.addedFormDismissed}
              />
            }
          </div>
          <div className="fixed-action-btn">
            <button
              onClick={() => {
                this.setState({ showForm: !showForm });
              }}
              component={<Modal />}
              className="btn-floating btn-large teal btn modal-trigger "
              data-target="modal1"
            >
              {showForm ? (
                <i className="large material-icons">-</i>
              ) : (
                <i className="large material-icons">+</i>
              )}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(List);
