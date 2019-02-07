import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="page_head">Add details for your products</p>
        <p className="p_color_g1">Unpriced products will be hidden. You can edit them later</p>
        <Cards />   
      </div >
    );
  }
}

export default App;
