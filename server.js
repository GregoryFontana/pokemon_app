const express = require(`express`)
const pokemonArr = require(`./models/pokemon`)
const pokemon = require(`./models/pokemon`)
const morgan = require(`morgan`)


const app = express()
const PORT = 3000

app.set(`view engine`, `jsx`);
app.engine(`jsx`, require(`express-react-views`).createEngine());



// app.get(`/pokemon/:id`, (req, res) => {
//     const {id} = req.params
//     res.render(`/views/Show`, {pokemon:pokemon[id]})
// }
// )

// Route route
app.get(`/`, (req, res) => {
    res.send(`Welcome to the Pokemon App!`)
})

//Index
app.get(`/pokemon`, (req, res) => {
    res.render(`Index`, {pokemon:pokemonArr})
})

//New
app.get('/pokemon/new', (req, res) => {
    res.render('New', {pokemon: pokemonArr})
})

// Show
app.get('/pokemon/:id', (req, res)=>{
    const { id } = req.params
    // res.send(req.params.id)
    res.render("Show", { pokemon: pokemonArr[id]})
});


app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
})