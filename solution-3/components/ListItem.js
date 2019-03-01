import React from 'react';

class ListItem extends React.Component {
    render() {
        const { pokemon } = this.props;

        return (
            <div className="listItem">
                <img src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
                <h3 className="listItem__name">{pokemon.name}</h3>
                <div className="listItem__price">
                  <div className="listItem__priceTxt">$40</div>
                </div>
                <div className="listItem__addButton">Add to Cart</div>
            </div>
        );
    }
}

export default ListItem;