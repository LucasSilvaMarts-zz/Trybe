import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonData } = this.props;
    const { name, type, averageWeight, image} = pokemonData;
    const { value, measurementUnit } = averageWeight;
    return(
      <container className='pokemon-card'>
        <div>
          <img src={ image } alt="pokemon"/>
        </div>
        <div>
          <h3>{ name }</h3>
          <p>{ type }</p>
          <p>{ value } { measurementUnit }</p>
        </div>
      </container>
    )
  }
}

export default Pokemon;