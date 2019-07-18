import React, {Component} from 'react'
import axios from 'axios'
import './Menu.css'

export default class Menu extends Component {
    constructor() {
        super()

        this.state = {
            menu: [],
            randomizedMenu: []
        }
    }

    componentDidMount() {
        this.getMenu()
    }

    getMenu() {
        axios.get('/api/recipes').then(res => {
            this.setState({
                menu: res.data
            })
        })
    }

    randomize() {
        const menuArr = []
        for (let i = 0; i < 5; i++) {
            menuArr.push(this.state.menu[Math.floor(Math.random() * (this.state.menu.length-1)) ])
        }
        this.setState({
            randomizedMenu: menuArr
        })
    }

    render() {
        const mappedMenu = this.state.randomizedMenu.map((el, i, arr) => {
           return (
               <div key={el.id}>
                    <p>{el.title}</p>
               </div>
           )
       })
        return (
            <div>
                <h2>Menu</h2>
                <section className='mapped-menu'>
                    {mappedMenu}
                </section>
                <button onClick={() => this.randomize()}>Generate Menu</button>
            </div>
        )
    }
}