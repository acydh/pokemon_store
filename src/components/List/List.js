import React from 'react';
import Card from '../Card/Card';
import EmptyList from '../EmptyList/EmptyList';
import classes from './List.scss'

class List extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const self = this.props;
    const nameFilter = self.nameFilter.toLowerCase();
    const typeFilter = self.typeFilter.toLowerCase();
    const filteredPokemons = [];
    //Populate the filtered pokemon array
    self.pokemons.map(pokemon => {
      if (pokemon.name.toLowerCase().match(nameFilter)) {
        if (typeFilter === "any") {
          filteredPokemons.push(pokemon)
        } else {
          if (pokemon.type.match(typeFilter)) {
            filteredPokemons.push(pokemon)
          }
        }
      }
      return null;
    });
    //Create the list with filtered pokemons
    const pokemonList = (
      filteredPokemons.map(pokemon =>
        <Card name={pokemon.name} price="45$" image={pokemon.image} key={pokemon.id} id={pokemon.id} addToCart={self.addToCart} cart={self.cart} />
      )
    )

    const noResults = (
      <div><h1>No results</h1></div>
    )

    return (
      <div className={classes.list}>
        {(filteredPokemons.length > 0) ? pokemonList : <EmptyList />}
      </div>
    );
  }
}


export default List;
