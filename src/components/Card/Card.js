import React, { Component } from 'react';
import classes from './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const self = this.props;
    const buttonClass = [classes.listItem__addButton];
    const doesItemExistInCart = (self.cart).filter(cartItem => self.id === cartItem.id).length > 0;

    if (doesItemExistInCart) {
      buttonClass.push(classes.listItem_added);
    }

    const buttonClicked = (event) => {
      if (!doesItemExistInCart) {
        self.addToCart(event);
      }
    }
    return (
        <div className={classes.listItem}>
          <img src={self.image} alt={self.name} title={self.name} />
          <h3 className={classes.listItem__name}>{self.name}</h3>
          <div className={classes.listItem__price}>
            <div className={classes.listItem__priceTxt}>{self.price}</div>
          </div>
          <div className={buttonClass.join(" ")} name={self.name} id={self.id} onClick={(event) => buttonClicked(event)}>{doesItemExistInCart ? "Added" : "Add to Cart"}</div>
        </div>
      )
    }
  }

export default Card;
