import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';

class ListItem extends Component {
  completeClick = completeTodoId => {
    const {completeToDo} = this.props;
    completeToDo(completeTodoId);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName" className="col s10 card blue-grey darken-1">

        <div className="card-content white-text ">
          <h4>{todo.username}</h4>
          {todo.meal} <br></br>
          &#8358;{todo.amount}
          <span 
            onClick={() => this.completeClick(todoId)}
            className="complete-todo-item waves-effect btn"
          >
            <i className="large material-icons">Delete</i>
          </span>
        </div>
      
      </div>
    );
  }
}

export default connect(null, {completeToDo})(ListItem);