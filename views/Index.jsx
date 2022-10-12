const React = require(`react`)
const pokemonArr = require(`../models/pokemon`)

class Index extends React.Component{
    render() {
        const{pokemon} = this.props
        return(
        <div style={myStyle.container}>
        <h1>See All the Pokemon</h1>
        <ul>
            {pokemon.map((pokemon, idx) => {
<li key={idx}>
    <a href={'/pokemon/${idx}'}>{pokemon.name}</a>
</li>

            })}
        </ul>
        
    </div>
    )}}




const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    textTransform: `capitalize`
    };
    
   module.exports = Index 