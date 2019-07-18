const express = require('express')
const app = express()
const PORT = 4001
const Ctrl = require('./controller')

app.use(express.json())

app.get('/api/recipes', Ctrl.getRecipes)
app.post('/api/recipes', Ctrl.addRecipe)
app.delete('/api/recipes/:id', Ctrl.deleteRecipe)
app.put('/api/recipes/:id', Ctrl.updateRecipe)
app.get('/api/recipes/random', Ctrl.getRandomRecipes)

app.listen(PORT, () => console.log(`${PORT} puppies on parade`))

