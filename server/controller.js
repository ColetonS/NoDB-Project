const data = require('./data')
let id = data.length-1

module.exports = {
    getRecipes(req, res) {
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
    
}