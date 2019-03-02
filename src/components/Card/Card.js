import React, { Component } from 'react';
import classes from './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    added: false
  }
  render() {
    const self = this.props;
    const buttonClass = [classes.listItem__addButton];

    if (this.state.added) {
      buttonClass.push(classes.listItem_added);
    }

    const buttonClicked = (event) => {
      if (this.state.added) {
        this.setState({added:false})
      } else {
        this.setState({added:true})
        self.add(event);
      }
    }
    return (
        <div className={classes.listItem}>
          <img src={self.image} alt={self.name} title={self.name} />
          <h3 className={classes.listItem__name}>{self.name}</h3>
          <div className={classes.listItem__price}>
            <div className={classes.listItem__priceTxt}>{self.price}</div>
          </div>
          <div className={buttonClass.join(" ")} name={self.name} id={self.id} onClick={(event) => buttonClicked(event)}>{this.state.added ? "Remove" : "Add to Cart"}</div>
        </div>
      )
    }
  }

export default Card;
