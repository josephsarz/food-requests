import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { selectChanged } from "../../../actions/selectAction";

class Select extends Component {
  componentDidMount() {
    M.FormSelect.init(this.FormSelect);
  }
  handleChange = event => {
    this.props.selectChanged(event.target.value);
  };
  render() {
    return (
      <div className="input-field col s12">
        <select
          ref={FormSelect => {
            this.FormSelect = FormSelect;
          }}
          onChange={this.handleChange}
        >
          <option value="0" disabled defaultValue>
            Choose your option
          </option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
        </select>
        <label>{this.props.orderCategoryName}</label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.selectValue
});

export default connect(mapStateToProps, { selectChanged })(Select);
