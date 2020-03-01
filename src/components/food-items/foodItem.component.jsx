import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteOrder } from "../../actions";
import "../food-items/fooditem.style.css";

class FoodItem extends Component {
  deleteClick = deleteOrderId => {
    const { deleteOrder } = this.props;
    deleteOrder(deleteOrderId);
  };

  render() {
    const { orderId, order } = this.props;
    return (
      <div className="col s5 card-item darken-1">
        <div className="card-content">
          <h4>{order.username}</h4>
          {order.meal}
          <br></br>
          &#8358;{order.amount}
          <span
            onClick={() => this.deleteClick(orderId)}
            className="complete-todo-item waves-effect btn"
          >
            <i className="large material-icons">Delete</i>
          </span>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteOrder })(FoodItem);
