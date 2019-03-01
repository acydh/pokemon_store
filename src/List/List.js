import React from 'react';
import Card from '../Card/Card';

const list = (props) => {
    return (
      <div className="list">
        {props.pokemons.map(pokemon => <Card name={pokemon.name} price="45$" image={pokemon.image} key={pokemon.id} id={pokemon.id} add={props.add} />)}
      </div>
      );
  }

export default list;
