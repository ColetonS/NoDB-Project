import React, { Component } from "react";

export default class EditRecipe extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h5>Edit Recipe</h5>
        <p>Title: </p>
        <p>Image URL: </p>
        <p>Cuisine: </p>
      </div>
    );
  }
}
