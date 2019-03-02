import React from 'react';
import Card from '../Card/Card';
import classes from './List.scss'

class List extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const self = this.props;
    const filterByType = self.filterByType.toLowerCase();
    const filterByName = self.filterByName.toLowerCase();
    const filteredPokemons = [];
    //Populate the filtered pokemon array
    self.pokemons.map(pokemon => {
      if (pokemon.name.toLowerCase().match(filterByName) && pokemon.type.toLowerCase() === filterByType || filterByType === "any") {
        filteredPokemons.push(pokemon)
      }
      return null;
    });
    //Create the list with filtered pokemons
    const pokemonList = (
      filteredPokemons.map(pokemon =>
        <Card name={pokemon.name} price="45$" image={pokemon.image} key={pokemon.id} id={pokemon.id} add={self.add} />
      )
    )

    return (
      <div className={classes.list}>
        {pokemonList}
      </div>
    );
  }
}


export default List;
