import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    console.log("onSubmit!!");
    event.preventDefault();
    console.log(this.inputRef);
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habbit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
