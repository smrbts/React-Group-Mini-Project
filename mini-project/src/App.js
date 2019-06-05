import React, {Component} from 'react';
import Header from './Header'
import List from './List'
import paintingData from './paintingData'
import Form from './Form'
// import logo from './logo.svg';
// import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component
{

  constructor()
  {
    super()
    this.state = 
    {
      list: true,
      filtered: false,
      paintings: paintingData,
      // newPaintings: [],
      likes: 0
    }
  }

 newGif = (e) => 
 {
   e.preventDefault()
   let gif = 
   {
     title: e.target[0].value,
     image: e.target[1].value,
     artist: 
     {
       name: e.target[2].value
     }
   }
   let gifArray = this.state.paintings
   gifArray.push(gif)
   this.setState(
     {
       paintings: gifArray,
       list:true
     })
     console.log(this.state.paintings)
 }

 filteredGifs = (e) => 
 {
  //  console.log(e.target.value)
  //  console.log(this.state.paintings)

  
   let newPaintings = []
   this.state.paintings.map(painting => {
     if(painting.title.includes(e.target.value)) {
      newPaintings.push(painting)
     }
      return newPaintings})
   
    // debugger
   this.setState(
    {
      newPaintings
    })

 }

 switchView = () => 
  {
    this.setState(
      {
        list: !this.state.list
      })
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <Header switchView = {this.switchView} filteredGifs = {this.filteredGifs}/>
          {this.state.list ? <List paintings = {this.state.paintings} addLike = {this.addLike}/> : <Form newGif = {this.newGif}/>}
          {this.state.filtered ? <List newPaintings={this.state.newPaintings} addLike = {this.addLike}/> : <List paintings = {this.state.paintings} addLike = {this.addLike}/>}
        </header>
      </div>
    )
  }
 
}

export default App;
