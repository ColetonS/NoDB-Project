import React, { Component } from "react";
import Recipe from "./Recipe";
import axios from "axios";

export default class RecipeContainer extends Component {
  constructor() {
    super();

    this.state = {
      allRecipes: []
    };
  }

  componentDidMount() {
    axios.get("/api/recipes").then(res => {
      this.setState({
        allRecipes: res.data
      });
    });
  }

  render() {
      const mappedRecipes = this.state.allRecipes.map((el, i, arr) => {
          return (
              <Recipe title={el.title} img={el.img} cuisine={el.cuisine} key={el.id} />
          )
      })
    return (
      <div>
        <h3>Recipes</h3>
        {mappedRecipes}
      </div>
    );
  }
}
