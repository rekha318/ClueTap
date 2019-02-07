import React, { Component } from 'react';
import './App.css';

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
                        className="card"
                        style={{ width: "100%" }}
                    >
                        <img src={"./images/images" + i + ".jpg"}
                            alt="Card image"
                            style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <p className="p_color_g1 align_l">
                                Product Title<br />
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
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <img src={"./images/images" + this.state.index + ".jpg"}
                                        alt="Card image"
                                        style={{ width: "100%", height: "200px" }} />
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <p className="p_color_g1 align_l f_s_10">
                                        Product Title<br />
                                        <input type="text" className="textbox"
                                            placeholder="Enter Product title" />
                                    </p>
                                    <p className="p_color_g1 align_l f_s_10">
                                        Price<br />
                                        <input type="number" className="textbox"
                                            placeholder="Enter Price"
                                        />
                                    </p>
                                    <p className="p_color_g1 align_l f_s_10">
                                        Other Price<br />
                                        <input type="number" className="textbox"
                                            placeholder="Enter Other Price" />
                                    </p>
                                    <p className="p_color_g1 align_l f_s_10">
                                        Shipping Cost<br />
                                        {/* <span class="currency">&#8377; */}
                                        <input type="number" className="textbox"
                                            placeholder="Enter Shipping Cost"
                                        />
                                    </p>
                                    <p className="p_color_g1 align_l f_s_10">
                                        Inventory<br />
                                        <select className="textbox">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>

                                    </p>
                                    <p className="p_color_g1 align_l f_s_10">
                                        Description<br />
                                        <input type="text" className="textbox"
                                            placeholder="Enter Description for Product" />
                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                </div>
                            </div>
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
