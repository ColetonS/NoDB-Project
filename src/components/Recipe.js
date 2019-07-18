import React, {Component} from 'react'
import EditRecipe from './EditRecipe'

export default class Recipe extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h4>
                    Recipe
                </h4>
                <EditRecipe />
            </div>
        )
    }
}