import React, {Component} from 'react'
import Recipe from './Recipe'

export default class RecipeContainer extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>Recipes</h3>
                <Recipe />
            </div>
        )
    }
}

