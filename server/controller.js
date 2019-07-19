const data = require('./data')
let id = data.length-1

module.exports = {
    getRecipes(req, res) {
        console.log(req.query)
        if (req.query.title) {
           let filteredArr = data.filter((el, index, arr) => {
                return el.title === req.query.title
            })
            res.status(200).send(filteredArr)
        } else if (req.query.cuisine) {
            let filteredArr = data.filter((el, index, arr) => {
                return el.cuisine === req.query.cuisine
            }) 
            res.status(200).send(filteredArr)
        } else {
        res.status(200).send(data)
        }
    },
    addRecipe(req, res) {
        let {title, img, cuisine} = req.body
        data.push({
            id: id,
            title: title,
            img: img,
            cuisine: cuisine
        })
        res.status(200).send(data)
        id++
    },
    deleteRecipe(req, res) {
        const {id} = req.params
        const index = data.findIndex(el => (
            el.id === +id
        ))
        data.splice(index, 1)
        res.status(200).send(data)
    },
    updateRecipe(req, res) {
        const {id} = req.params
        const {title, img, cuisine} = req.body
        const index = data.findIndex(el => (
            el.id === +id
        ))
        data[index].title = title
        data[index].img = img
        data[index].cuisine = cuisine
        res.status(200).send(data)
    },
    getRandomRecipes(req, res) {
        const menuArr = []
        const rand1 = Math.floor(Math.random() * 20) 
        const rand2 = Math.floor(Math.random() * 20)
        const rand3 = Math.floor(Math.random() * 20)
        const rand4 = Math.floor(Math.random() * 20)
        const rand5 = Math.floor(Math.random() * 20)
        
        menuArr.push(rand1)
        menuArr.push(rand2)
        menuArr.push(rand3)
        menuArr.push(rand4)
        menuArr.push(rand5)
    }
    
}