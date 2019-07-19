import React, { Component } from "react";
import EditRecipe from "./EditRecipe";
import Button from "./Button";

export default class Recipe extends Component {
  constructor() {
    super();

    this.state = {
      edit: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    let { title, cuisine } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{cuisine}</h5>
        {this.state.edit ? <EditRecipe /> : null}
        <Button
          onClick={this.toggle}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Edit
        </Button>
      </div>
    );
  }
}
