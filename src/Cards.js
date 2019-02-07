import React, { Component } from 'react';
import './App.css';

class Cards extends Component {
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal" data-target="#myModal" className="card" style={{ width: "100%" }}>
                        <img src="./images/images.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="card-text">Some example text some example text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal" data-target="#myModal" className="card" style={{ width: "100%" }}>
                        <img src="./images/images1.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="card-text">Some example text some example text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal" data-target="#myModal" className="card" style={{ width: "100%" }}>
                        <img src="./images/images2.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="card-text">Some example text some example text.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal" data-target="#myModal" className="card" style={{ width: "100%" }}>
                        <img src="./images/image3.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="card-text">Some example text some example text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal" data-target="#myModal" className="card" style={{ width: "100%" }}>
                        <img src="./images/image4.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="card-text">Some example text some example text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal" data-target="#myModal" className="card" style={{ width: "100%" }}>
                        <img src="./images/images5.jpg" alt="Card image" style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="card-text">Some example text some example text.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

export default Cards;
