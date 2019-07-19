import React, { Component } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import Button from './Button'
import EditRecipe from "./EditRecipe";

export default class RecipeContainer extends Component {
  constructor() {
    super();

    this.state = {
      allRecipes: [],
      title: '',
      cuisine: '',
      img: '',
      userInput: '',
      selection: ''
    };

    this.addRecipe = this.addRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)
    this.handleEditTitleChange = this.handleEditTitleChange.bind(this)
    this.handleEditCuisineChange = this.handleEditCuisineChange.bind(this)
    this.handleEditURLChange = this.handleEditURLChange.bind(this)
  }

  componentDidMount() {
    axios.get("/api/recipes").then(res => {
      this.setState({
        allRecipes: res.data
      });
    });
  }

  searchRecipe() {
    axios.get(`api/recipes?${this.state.selection}=${this.state.userInput}`).then(res => {
        this.setState({
            allRecipes: res.data
        })
    })
}

  handleSelectChange(val) {
      this.setState({
          selection: val
      })
  }

  handleSearchChange(val) {
      this.setState({
          userInput: val
      })
  }

  search() {
      const filteredRecipes = this.allRecipes.filter()
  }

  editRecipe(id) {
    axios.put(`/api/recipes/${id}`, {
        title: this.state.title,
        img: this.state.img,
        cuisine: this.state.cuisine
    }).then(res => {
        this.setState({
            allRecipes: res.data
        })
    })
  }

  handleEditTitleChange(val) {
      this.setState({
          title: val
      })
  }
  handleEditCuisineChange(val) {
      this.setState({
          cuisine: val
      })
  }
  handleEditURLChange(val) {
      this.setState({
          img: val
      })
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
            img: val
        })
    }

  render() {
      const mappedRecipes = this.state.allRecipes.map((el, i, arr) => {
          return (
              <Recipe title={el.title} img={el.img} cuisine={el.cuisine} key={el.id} id={el.id} deleteFn={this.deleteRecipe} editFn={this.editRecipe} handleEditTitleFn={this.handleEditTitleChange} handleEditCuisineFn={this.handleEditCuisineChange} handleEditURLFn={this.handleEditURLChange} />
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
            >Submit New Recipe</Button>
        </div>

        <div>
            <h3>Search Recipes</h3>
            <input
                onChange={e => this.handleSearchChange(e.target.value)}
                placeholder='Search by Title or Cuisine'
             />
            <select onChange={e => this.handleSelectChange(e.target.value)}>
                <option>Title</option>
                <option>Cuisine</option>
            </select>
            <Button
                onClick={this.search}
            >Search</Button>
        </div>
        
        <div>
            <h2>Recipe Collection</h2>
            {mappedRecipes}
        </div>
      </div>
    );
  }
}
