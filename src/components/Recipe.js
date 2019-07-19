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
    let { title, cuisine, img } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{cuisine}</h5>
        <img src={img} />
        {this.state.edit ? <EditRecipe id={this.props.id} editFn={this.props.editFn} handleEditTitleFn={this.props.handleEditTitleFn} handleEditCuisineFn={this.props.handleEditCuisineFn} handleEditURLFn={this.props.handleEditURLFn} /> : null}
        <Button
          onClick={this.toggle}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Edit
        </Button>
        <Button 
            onClick={() => {this.props.deleteFn(this.props.id)}}
        >Delete
        </Button>
      </div>
    );
  }
}
