import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="page_head">Add details for your products</p>
        <p className="p_color_g1">Unpriced products will be hidden. You can edit them later</p>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card" style={{ width: "100%" }}>
                <img src="./images/images.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <p className="card-text">Some example text some example text.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card" style={{ width: "100%" }}>
                <img src="./images/images1.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <p className="card-text">Some example text some example text.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card" style={{ width: "100%" }}>
                <img src="./images/images2.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <p className="card-text">Some example text some example text.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card" style={{ width: "100%" }}>
                <img src="./images/image3.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <p className="card-text">Some example text some example text.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card" style={{ width: "100%" }}>
                <img src="./images/image4.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <p className="card-text">Some example text some example text.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card" style={{ width: "100%" }}>
                <img src="./images/images5.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <p className="card-text">Some example text some example text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
