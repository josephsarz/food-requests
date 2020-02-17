import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import FoodItem from "../components/food-items/foodItem.component";
import "./style.css";

class List extends Component {
  state = {
    showForm: false,
    mealValue: "",
    username: "",
    amount: ""
  };

  inputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  formSubmit = event => {
    const {mealValue} = this.state;
    const {username} = this.state;
    const {amount} = this.state;
    const {addOrder} = this.props;
    event.preventDefault();
    addOrder({username: username, meal: mealValue, amount: amount});
    this.setState({
      mealValue: "",
      username: "",
      amount: ""
    });
  }; 

  renderForm = () => {

    const {showForm, mealValue, username, amount} = this.state;
    
    if (showForm) {
      return (
        <div id="todo-add-form" className="col s10 offset-s1">
          <form onSubmit={this.formSubmit}>
            <div className="row">
            <div className="input-field col s12">
              <input 
                value={username}
                name="username"
                id="username"
                type="text"
                onChange={this.inputChange}
                className="validate"
              />
              <label htmlFor="username">Username?</label>
            </div>

            <div className="input-field col s12">
              <textarea
                name="mealValue"
                value={mealValue}
                id="meal"
                type="text"
                onChange={this.inputChange}
                className="validate materialize-textarea"
              />
              <label htmlFor="meal">Meal</label>
    
            </div>

              <div className="input-field col s12">
                <input
                  value={amount}
                  name="amount"
                  id="amount"
                  type="number"
                  onChange={this.inputChange}
                  className="validate"
                />
                <label htmlFor="amount">Amount?</label>
              </div>

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
    }
  };

  renderToDo() {
    const {data} = this.props;
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
    const { showForm } = this.state;

    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div className="fixed-action-btn">
          <button
            onClick={() => this.setState({ showForm: !showForm })}
            className="btn-floating btn-large teal"
          >
            {showForm ? (
              <i className="large material-icons">-</i>
            ) : (
              <i className="large material-icons">+</i>
            )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(List);
