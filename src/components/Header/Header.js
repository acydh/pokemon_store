import React from 'react';
import classes from './Header.scss';

const header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="img/pokeball.svg" alt="Pokeball" />
      </div>
    </header>
  )
}

export default header;
