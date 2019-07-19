import React, { Component } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import Button from './Button'

export default class RecipeContainer extends Component {
  constructor() {
    super();

    this.state = {
      allRecipes: [],
      title: '',
      cuisine: '',
      url: ''
    };

    this.addRecipe = this.addRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  componentDidMount() {
    axios.get("/api/recipes").then(res => {
      this.setState({
        allRecipes: res.data
      });
    });
  }

  deleteRecipe(id) {
      axios.delete(`/api/recipes/${id}`).then(res => {
          this.setState({
              allRecipes: res.data
          })
      })
  }

  addRecipe() {
      axios.post('/api/recipes', {
          title: this.state.title,
          img: this.state.img,
          cuisine: this.state.cuisine
      }).then(res => {
          this.setState({
              allRecipes: res.data
          })
      })
  }

    handleTitleChange(val) {
        this.setState({
            title: val
        })
    }
    handleCuisineChange(val) {
        this.setState({
            cuisine: val
        })
    }
    handleURLChange(val) {
        this.setState({
            url: val
        })
    }

  render() {
      const mappedRecipes = this.state.allRecipes.map((el, i, arr) => {
          return (
              <Recipe title={el.title} img={el.img} cuisine={el.cuisine} key={el.id} id={el.id} deleteFn={this.deleteRecipe} />
          )
      })
    return (
      <div>
        <div>
            <h3>Add Recipe</h3>
            <input 
                onChange={e => this.handleTitleChange(e.target.value)}placeholder='Title'
            />
            <input 
                onChange={e => this.handleCuisineChange(e.target.value)}
                placeholder='Cuisine'
            />
            <input 
                onChange={e => this.handleURLChange(e.target.value)}
                placeholder='Image URL'
            />
            <Button
                onClick={this.addRecipe}
                style={{backgroundColor: 'black', color: 'white'}}
            >Submit</Button>
        </div>
        
        <div>
            <h3>Recipes</h3>
            {mappedRecipes}
        </div>
      </div>
    );
  }
}
