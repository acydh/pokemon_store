import React from 'react';

const card = (props) => {

  return (
      <div className="listItem">
        <img src={props.image} alt={props.name} title={props.name} />
        <h3 className="listItem__name">{props.name}</h3>
        <div className="listItem__price">
          <div className="listItem__priceTxt">{props.price}</div>
        </div>
        <div className="listItem__addButton" name={props.name} id={props.id} onClick={props.add}>Add to Cart</div>
      </div>
    )
}

export default card;
