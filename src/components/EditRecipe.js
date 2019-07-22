import React, { Component } from "react";
import Button from './Button'

export default class EditRecipe extends Component {
  constructor() {
    super();

    this.state = {
        title: '',
        cuisine: '',
        url: ''
    };
  }

  render() {
    return (
      <div>
        <h4>Edit Recipe</h4>
        <input 
            onChange={e => this.props.handleEditTitleFn(e.target.value)}
            placeholder='Title'
        />
        <input 
            onChange={e => this.props.handleEditCuisineFn(e.target.value)}
            placeholder='Cuisine'
        />
        <input 
            onChange={e => this.props.handleEditURLFn(e.target.value)}
            placeholder='Image URL'
        />
        <Button
            onClick={() => {this.props.editFn(this.props.id)}}
            style={{backgroundColor: '#2B223B', color: 'white', borderRadius: '25px'}}
        >Submit Changes</Button>
      </div>
    );
  }
}
