const express = require(`express`)
const pokemon = require('./models/pokemon')


const app = express()
const PORT = 3000

app.set(`view engine`, `jsx`);
app.engine(`jsx`, require(`express-react-views`).createEngine());


app.get(`/`, (req, res) => {
    res.send(`Welcome to the Pokemon App!`)
})

app.get(`/pokemon`, (req, res) => {
    res.render(`Index`)
})




app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
})