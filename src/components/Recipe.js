import React, { Component } from "react";
import EditRecipe from "./EditRecipe";

export default class Recipe extends Component {
  constructor() {
    super();

    this.state = {
      edit: false
    };
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
        <button onClick={() => this.toggle()}>Edit</button>
      </div>
    );
  }
}
