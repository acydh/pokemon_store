import React from 'react';

const searchBar = (props) => {
  return (
    <div>
      <div className="filterInput">
        <input type="text" placeholder="Gotta Catch 'em all!"></input>
      </div>
      <ul className="typeList">
        <li className="any selected">any</li>
        <li className="normal">normal</li>
        <li className="electric">electric</li>
        <li className="fire">fire</li>
        <li className="water">water</li>
        <li className="grass">grass</li>
        <li className="fight">fight</li>
        <li className="psychic">psychic</li>
        <li className="fairy">fairy</li>
        <li className="flying">flying</li>
      </ul>
    </div>
  )
}

export default searchBar;
