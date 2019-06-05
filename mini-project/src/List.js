import React, {Component} from 'react';
import Painting from './Painting'
// import logo from './logo.svg';


class List extends Component
{

  render()
  {
    return(
        <div>
            <p>SEE MY PAINTING GIFS!!!!!</p>
            {console.log("hi", this.props.newPaintings!=null)}
            {!this.props.newPaintings || this.props.newPaintings.length === 0 ? 
            this.props.paintings.map(painting => <Painting  painting = {painting} addLike = {this.props.addLike}/>)
            : this.props.newPaintings.map(painting => <Painting  painting = {painting} addLike = {this.props.addLike}/>)}
            
    {/* {this.props.paintings.map(painting => <Painting  key = {painting.id} painting = {painting} addLike = {this.props.addLike}/>)} */}
            
        </div>
    )
  }
 
}

export default List;