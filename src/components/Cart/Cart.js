import React from 'react';
import classes from './Cart.scss';

class Cart extends React.Component {
    render() {
      const { isCartOpen, toggleCart, cartItems, removeItemFromCart } = this.props;
      const cartClasses = [classes.cart];
      if (isCartOpen) cartClasses.push(classes.cart_active);
      return (
        <div className={cartClasses.join(" ")}>
        <div className={classes.cartCloseBar} onClick={toggleCart}><i class="fas fa-chevron-down fa-2x"></i></div>

          { cartItems.length > 0 ? (
                    <div className={classes.cartList}>
                    {cartItems.map(cartItem => (
                        <div className={classes.cartListItem} key={`c-${cartItem.name}`}>
                            <div className={classes.cartListItem__removeBtn} onClick={(e) => removeItemFromCart(e, cartItem) }>
                                <img src="img/error.svg" alt="" />
                            </div>
                            <img className={classes.cartListItem__image} src={cartItem.image} alt={cartItem.name} title={cartItem.name} />
                        </div>
                    ))}
                </div>
                ) : false }

                { cartItems.length === 0 ? (
                    <div className={classes.cartEmpty}>
                        Your cart is empty.
                    </div>
                ) : false }

        </div>
      )
    }
  }

export default Cart;

// ``````
