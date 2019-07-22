import React, { Component } from "react";
import EditRecipe from "./EditRecipe";
import Button from "./Button";
import './Recipe.css'

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
      <div className='recipe-container'>
        <div className='text'>
          <h4>{title}</h4>
        </div>
        <img id='recipes' src={img} alt={title} />
        {this.state.edit ? <EditRecipe id={this.props.id} editFn={this.props.editFn} handleEditTitleFn={this.props.handleEditTitleFn} handleEditCuisineFn={this.props.handleEditCuisineFn} handleEditURLFn={this.props.handleEditURLFn} /> : null}
        <div><Button
        id='recipe-button'
        onClick={this.toggle}
        style={{ backgroundColor: "blue", color: "white", borderRadius: '25px' }}
        >
        Edit
        </Button>
        <Button
        onClick={() => {this.props.deleteFn(this.props.id)}} style={{backgroundColor: 'red', color: 'white', borderRadius: '25px'}}
        >Delete
        </Button></div>
      </div>
    );
  }
}
