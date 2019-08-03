import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            pokemon: {
                name: '',
                img: ''
            }
        }
    }

    componentDidMount() {
      let rand = Math.floor(1 + Math.random() * 807);
      fetch('https://pokeapi.co/api/v2/pokemon/'+ rand)
          .then(data => data.json())
          .then(data =>{
             this.setState( {
                  pokemon: {
                      name: data.name,
                      img: data.sprites.front_default
                  }
              })
          })
          .catch(() => [] );
    }

    render() {
        const {name, img} = this.state.pokemon;
        return (
            <div className='pokemon'>
                <img src={img} alt={name}/>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default App;
