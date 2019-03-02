import React from 'react';
import classes from './SearchBar.scss';

const searchBar = (props) => {
  return (
    <div>
      <div className={classes.filterInput}>
        <input type="text" placeholder="Gotta Catch 'em all!" onChange={props.filterByName}></input>
      </div>
      <ul className={classes.typeList}>
        <li onClick={props.filterByType} className={[classes.any, classes.selected].join(" ")}>any</li>
        <li onClick={props.filterByType} className={classes.normal}>normal</li>
        <li onClick={props.filterByType} className={classes.electric}>electric</li>
        <li onClick={props.filterByType} className={classes.fire}>fire</li>
        <li onClick={props.filterByType} className={classes.water}>water</li>
        <li onClick={props.filterByType} className={classes.grass}>grass</li>
        <li onClick={props.filterByType} className={classes.fight}>fight</li>
        <li onClick={props.filterByType} className={classes.psychic}>psychic</li>
        <li onClick={props.filterByType} className={classes.fairy}>fairy</li>
        <li onClick={props.filterByType} className={classes.flying}>flying</li>
      </ul>
    </div>
  )
}

export default searchBar;
