import React from 'react';
import classes from './App.scss';
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      typeFilter: 'any',
      pokemons: pokemons,
      cart: [],
    }
  }

  addToCart = (event) => {
    const id = event.target.getAttribute("id");
    const pokemonToAdd = this.state.pokemons[id-1];
    const pokemonInCart = [...this.state.cart];
    pokemonInCart.push(pokemonToAdd);
    this.setState(
      {
        cart: pokemonInCart
      }
    );
  };

  filterByNameHandler = (event) => {
    const keyword = event.target.value;
    this.setState({nameFilter: keyword});
  }

  filterByTypeHandler = (event) => {
    const type = event.target.innerHTML;
    this.setState({typeFilter: type});
  }

  toggleCartHandler = () => {
    if (this.state.showCart === true) {
      this.setState({showCart: false})
    } else {
      this.setState({showCart: true})
    }
  }

  removeItemHandler = (event, item) => {
    console.log(this.state.cart[item.id - 1]);
    const cartCopy = [...this.state.cart];
    let index = null;
    cartCopy.map((pokemon, i) => {
      if (item.id === pokemon.id ) {
        index = i;
        return null;
      }
      return null;  
    });
    cartCopy.splice(index, 1);
    this.setState(
      {
        cart: cartCopy
      }
    );
  };

  render() {
    const cartLength = (this.state.cart).length;

    return (
      <div className={classes.wrapper}>
          <Header cartItems={cartLength} toggleCart={this.toggleCartHandler} />
          <SearchBar filterByName={this.filterByNameHandler} filterByType={this.filterByTypeHandler}/>
          <List pokemons={this.state.pokemons} addToCart={this.addToCart} cart={this.state.cart} nameFilter={this.state.nameFilter} typeFilter={this.state.typeFilter}/>
          <Cart isCartOpen={this.state.showCart} toggleCart={this.toggleCartHandler} cartItems={this.state.cart} removeItemFromCart={this.removeItemHandler}/>
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
