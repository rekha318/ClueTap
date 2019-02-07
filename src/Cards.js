import React, { Component } from 'react';
import './App.css';
import CardDetails from './CardDetails';
import Images from './Images';
import Variations from './Variations';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    showCard() {
        var cards = [];
        for (var i = 0; i < 12; i++) {
            cards.push(
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <div data-toggle="modal"
                        data-target="#myModal"
                        className="card-i card"
                    >
                        <img src={"./images/images" + i + ".jpg"}
                            alt="Card image"
                            className="card-image" />
                        <div className="card-body">
                            <p className="p_color_g1 align_l">
                                Product Title<hr />
                                &#8377;--
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
        return cards;
    }
    render() {
        return (<div className="container">
            <div className="row">
                {
                    this.showCard()
                }
            </div>
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <img src={"./images/images" + this.state.index + ".jpg"}
                                        alt="Card image"
                                        className="card-image" />
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 image-back">
                                    <Images />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <CardDetails />
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <Variations />
                                </div>
                            </div>
                            <button type="button" class="close" data-dismiss="modal">&#x261E;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Cards;
