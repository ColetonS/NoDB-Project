import React, { Component } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import Button from "./Button";
import EditRecipe from "./EditRecipe";
import "./RecipeContainer.css";

export default class RecipeContainer extends Component {
  constructor() {
    super();

    this.state = {
      allRecipes: [],
      title: "",
      cuisine: "",
      img: "",
      userInput: "",
      selection: ""
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
    this.handleEditCuisineChange = this.handleEditCuisineChange.bind(this);
    this.handleEditURLChange = this.handleEditURLChange.bind(this);
  }

  // Fetch data from server and assign it to allRecipes

  componentDidMount() {
    axios.get("/api/recipes").then(res => {
      this.setState({
        allRecipes: res.data
      });
    });
  }

  // Search methods

  searchRecipes() {
    axios
      .get(`/api/recipes?${this.state.selection}=${this.state.userInput}`)
      .then(res => {
        this.setState({
          allRecipes: res.data
        });
      });
  }

  handleSelectChange(val) {
    this.setState({
      selection: val
    });

    console.log(this.state);
  }

  handleSearchChange(val) {
    this.setState({
      userInput: val
    });
  }

  // Edit methods

  editRecipe(id) {
    axios
      .put(`/api/recipes/${id}`, {
        title: this.state.title,
        img: this.state.img,
        cuisine: this.state.cuisine
      })
      .then(res => {
        this.setState({
          allRecipes: res.data
        });
      });
  }

  handleEditTitleChange(val) {
    this.setState({
      title: val
    });
  }
  handleEditCuisineChange(val) {
    this.setState({
      cuisine: val
    });
  }
  handleEditURLChange(val) {
    this.setState({
      img: val
    });
  }

  //  Delete method

  deleteRecipe(id) {
    axios
      .delete(`/api/recipes/${id}`)
      .then(res => {
        this.setState({
          allRecipes: res.data
        });
      })
      .catch(() => {
        alert("error deleting");
      });
  }

  //   Add methods

  addRecipe() {
    axios
      .post("/api/recipes", {
        title: this.state.title,
        img: this.state.img,
        cuisine: this.state.cuisine
      })
      .then(res => {
        this.setState({
          allRecipes: res.data
        });
      })
      .catch(() => {
        alert("failed to add");
      });
  }

  handleTitleChange(val) {
    this.setState({
      title: val
    });
  }
  handleCuisineChange(val) {
    this.setState({
      cuisine: val
    });
  }
  handleURLChange(val) {
    this.setState({
      img: val
    });
  }

  // Render

  render() {
    const mappedRecipes = this.state.allRecipes.map((el, i, arr) => {
      return (
        <Recipe
          title={el.title}
          img={el.img}
          cuisine={el.cuisine}
          key={el.id}
          id={el.id}
          deleteFn={this.deleteRecipe}
          editFn={this.editRecipe}
          handleEditTitleFn={this.handleEditTitleChange}
          handleEditCuisineFn={this.handleEditCuisineChange}
          handleEditURLFn={this.handleEditURLChange}
        />
      );
    });
    return (
      <div className='add-recipe-container'>
        <h3>Add Recipe</h3>
        <div className="add-recipe">
          <input
            onChange={e => this.handleTitleChange(e.target.value)}
            placeholder="Title"
          />
          <input
            onChange={e => this.handleCuisineChange(e.target.value)}
            placeholder="Cuisine"
          />
          <input
            onChange={e => this.handleURLChange(e.target.value)}
            placeholder="Image URL"
          />
          <Button
            onClick={() => this.addRecipe()}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Submit New Recipe
          </Button>
        </div>

        <div>
          <h3>Search Recipes</h3>
          <div className='search-recipes'>
            <input
              onChange={e => this.handleSearchChange(e.target.value)}
              placeholder="Search by Title or Cuisine"
            />
            <select onChange={e => this.handleSelectChange(e.target.value)}>
              <option value="">Select your option</option>
              <option value="title">Title</option>
              <option value="cuisine">Cuisine</option>
            </select>
            <Button onClick={() => this.searchRecipes()}>Search</Button>
          </div>
        </div>

        <div className>
          <h2>Recipe Collection</h2>
          {mappedRecipes}
        </div>
      </div>
    );
  }
}
