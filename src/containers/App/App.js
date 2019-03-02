import React from 'react';
import classes from './App.scss';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
      filterType: 'any',
      pokemons: pokemons,
      cart: []
    }
  }

  addToCart = (event) => {
    const pokemonToAdd = event.target.getAttribute("id");
    const pokemonInCart = [...this.state.cart];
    pokemonInCart.push(pokemonToAdd);
    this.setState(
      {
        cart: pokemonInCart
      }
    );
    console.log(this.state.cart);
  };

  filterByNameHandler = (event) => {
    const keyword = event.target.value;
    this.setState({filterKeyword: keyword});
  }

  filterByTypeHandler = (event) => {
    const type = event.target.innerHTML;
    this.setState({filterType: type});
  }

  render() {
    console.log("Keyword filter: " + this.state.filterKeyword);
    console.log("Type filter: " + this.state.filterType);
    return (
      <div className={classes.wrapper}>
          <Header />
          <SearchBar filterByName={this.filterByNameHandler} filterByType={this.filterByTypeHandler}/>
          <List pokemons={this.state.pokemons} add={this.addToCart} filterByName={this.state.filterKeyword} filterByType={this.state.filterType}/>
      </div>
    );
  }
}

const pokemons = [
    {
        id: 1,
        name: 'Abra',
        type: 'psychic',
        image: 'img/abra.svg',
    },
    {
        id: 2,
        name: 'Bellsprout',
        type: 'grass',
        image: 'img/bellsprout.svg',
    },
    {
        id: 3,
        name: 'Bulbasaur',
        type: 'grass',
        image: 'img/bullbasaur.svg',
    },
    {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        image: 'img/charmander.svg',
    },
    {
        id: 5,
        name: 'Eevee',
        type: 'normal',
        image: 'img/eevee.svg',
    },
    {
        id: 6,
        name: 'Squirtle',
        type: 'water',
        image: 'img/squirtle.svg',
    },
    {
        id: 7,
        name: 'Jigglypuff',
        type: 'fairy',
        image: 'img/jigglypuff.svg',
    },
    {
        id: 8,
        name: 'Pikachu',
        type: 'electric',
        image: 'img/pikachu-2.svg',
    },
    {
        id: 9,
        name: 'Meowth',
        type: 'normal',
        image: 'img/meowth.svg',
    },
    {
        id: 10,
        name: 'Psyduck',
        type: 'psychic,water',
        image: 'img/psyduck.svg',
    },
    {
        id: 11,
        name: 'Snorlax',
        type: 'normal',
        image: 'img/snorlax.svg',
    },
    {
        id: 12,
        name: 'Venonat',
        type: 'bug,poison',
        image: 'img/venonat.svg',
    },
    {
        id: 13,
        name: 'Pidgey',
        type: 'flying',
        image: 'img/pidgey.svg',
    },
    {
        id: 14,
        name: 'Rattata',
        type: 'normal',
        image: 'img/rattata.svg',
    },
    {
        id: 15,
        name: 'Mankey',
        type: 'fight',
        image: 'img/mankey.svg',
    },
    {
        id: 16,
        name: 'Dratini',
        type: 'water',
        image: 'img/dratini.svg',
    }
  ];

export default App;
