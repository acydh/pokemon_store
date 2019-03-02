import React from 'react';
import classes from './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    selectedType: ""
  }
  render() {
    const self = this.props;
    const typeClicked = (event) => {
      self.filterByType(event);
       this.setState({selectedType: event.target.innerHTML});
    }
    return (
      <div>
        <div className={classes.filterInput}>
          <input type="text" placeholder="Gotta Catch 'em all!" onChange={self.filterByName}></input>
        </div>
        <ul className={classes.typeList}>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'any' ? classes.any : null}>any</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'normal' ? classes.normal : null}>normal</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'electric' ? classes.electric : null}>electric</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'fire' ? classes.fire : null}>fire</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'water' ? classes.water : null}>water</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'grass' ? classes.grass : null}>grass</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'fight' ? classes.fight : null}>fight</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'psychic' ? classes.psychic : null}>psychic</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'fairy' ? classes.fairy : null}>fairy</li>
          <li onClick={(event) => typeClicked(event)} className={this.state.selectedType === 'flying' ? classes.flying : null}>flying</li>
        </ul>
      </div>
    )
  }
}

export default SearchBar;
