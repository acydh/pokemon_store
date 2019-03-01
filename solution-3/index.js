import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Header from './components/Header';
import ListEmpty from './components/ListEmpty';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            pokemons: props.pokemons,
        };

        this.onChangeFilterInput = this.onChangeFilterInput.bind(this);
    }

    onChangeFilterInput(e) {
        const { pokemons } = this.state;
        const keyword = e.target.value.toLowerCase();

        this.setState({
            keyword
        });
    }

    render() {
        const { keyword } = this.state;

        const filteredPokemons = pokemons.filter((pokemon) => {
            const name = pokemon.name.toLowerCase();

            return name.indexOf(keyword) > -1;
        });

        return (
            <div className="wrapper">
                <Header toggleCart={this.toggleCart} />

                <div className="filterInput">
                    <input onChange={this.onChangeFilterInput} type="text" value={keyword} placeholder="Gotta Catch'em all" />
                </div>


                { filteredPokemons.length > 0 ? (
                    <List pokemons={filteredPokemons} />
                ) : false }

                { filteredPokemons.length === 0 ? (
                    <ListEmpty />
                ) : false }
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
        name: 'Bullbasaur',
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
    },
];

ReactDOM.render(
    <App pokemons={pokemons} />,
    document.getElementById('root')
);
