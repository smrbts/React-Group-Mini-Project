import React, {Component} from 'react';
// import logo from './logo.svg';


class Painting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            votes: props.painting.votes
        }
    }


    addLike = () => 
    {
      this.setState(
      {
          votes: this.state.votes + 1
      })
    }

    spinGif = (id) => 
    {
        setInterval(() => document.getElementById(id).style.transform += "rotate(10deg)", 70);  
    }

  render()
  {
    return(
        <div>
        <h2>{this.props.painting.title}</h2>
        <img src={this.props.painting.image} id = {this.props.painting.id}></img>
        <p>{this.props.painting.artist.name}</p>
        <p>Likes: {this.state.votes}</p>
        <button onClick = {this.addLike}> Like </button>
        <button onClick = {() => this.spinGif(this.props.painting.id)}> SPIN TIME </button>
        </div>
    )
  }
 
}

export default Painting;