const React = require('react');
// const pokemon = require('./Models/pokemon')

class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div style={myStyles.container}>
                <h1>Gotta Catch 'Em All</h1>

                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.img} width="100" height="100" />
                    <br />
                    <br />
                    <a href='/pokemon'>BACK</a>
                    
            </div>
        );
    }
}

const myStyles = {
    container: {
        color: 'black',
        backgroundColor: 'orange',
        textTransform: 'capitalize',
        fontFamily: 'Impact',
        fontSize: '20px',
    }
};



module.exports = Show;