import React, {Component} from 'react'
import axios from 'axios'
import './Menu.css'
import Button from './Button'

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
                    <h3>{el.title}</h3>
                    <img id='menu-img' src={el.img} alt={el.title} />
               </div>
           )
       })
        return (
            <div>
                <section className='mapped-menu'>
                    {mappedMenu}
                </section>
                <Button 
                    onClick={() => this.randomize()}
                    style={{backgroundColor: '#93ACB5', color: 'white', borderRadius: '25px', height: '6vh'}}
                    >
                        Generate Your Weekly Menu
                    </Button>
            </div>
        )
    }
}