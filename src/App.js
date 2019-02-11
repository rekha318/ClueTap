import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="row">
      <div className="col-md-3">
        </div>
      <div className="col-md-9">
        <p className="page_head">Add details for your products</p>
        <p className="p_color_g1">Unpriced products will be hidden. You can edit them later</p>
        <Cards />   
        </div>  
        </div>
      </div >
    );
  }
}

export default App;
