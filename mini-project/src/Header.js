import React, {Component} from 'react';
import SearchForm from './SearchForm'
import 'semantic-ui-css/semantic.min.css'


class Header extends Component
{

  render()
  {
    return(
    <div className={`ui inverted blue menu`}>
    <a className="item">
    <h2 className="ui header">
    <i className={`paint brush icon`} />
    <div className="content">Painting GIF App</div>
    </h2>
    </a>
    <a className="item">
      <button onClick = {() => this.props.switchView()}>Add a GIF!</button>
    </a>
    <div className={'ui focus input'}>
      <SearchForm filteredGifs = {this.props.filteredGifs}/>
    </div>
   </div>
   
    );
  }
 
}

export default Header;