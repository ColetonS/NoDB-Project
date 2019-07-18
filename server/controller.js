const data = require('./data')
let id = data.length-1

module.exports = {
    getRecipes(req, res) {
        res.status(200).send(data)
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
    }
}