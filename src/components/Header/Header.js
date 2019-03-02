import React from 'react';
import classes from './Header.scss';

const header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="img/pokeball.svg" alt="Pokeball" />
      </div>
      <div className={classes.cartBtn} onClick={(e) => props.toggleCart(e, true)}>
        <div className={classes.cartItemCount}>{props.cartItems}</div>
        <img src="img/shopping-cart.svg" alt="" />
      </div>
    </header>
  )
}

export default header;
