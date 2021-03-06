import React, { Component } from 'react';
import './App.css';
import CardDetails from './CardDetails';
import Images from './Images';
import Variations from './Variations';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    showCard() {
        var cards = [];
        for (var i = 0; i < 6; i++) {
            cards.push(
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <OverlayTrigger trigger="click"
                        rootClose overlay={
                            <Popover id="popover-basic" >
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
                                    <div className="arrow-div">
                                        <button data-dismiss="modal" type="button" class="close"
                                            className="btn-next-2" onClick={() => {
                                                document.getElementById('popover-basic').style.display = 'none';
                                            }}>
                                            <span className="next-arrow-2">→</span>
                                        </button>
                                    </div>
                                </div>
                            </Popover>}>
                        <div className="card-i card">
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
                    </OverlayTrigger>
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
            <div className="next-div">
            <a href="/" className="btn-next">Next <span className="next-arrow">→</span></a>
            </div>
        </div>
        );
    }
}

export default Cards;
