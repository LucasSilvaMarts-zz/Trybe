import React from 'react';
import Pokemon from './pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {

    const pokeCard = pokemons.map((pokemon) => (
      <Pokemon key={ pokemon.name } pokemonData={ pokemon }/>
    ))

    return(
      <div>
        { pokeCard }
      </div>

    )
  }
}

export default Pokedex;