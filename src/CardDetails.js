import React, { Component } from 'react';
import './App.css';
import Variations from './Variations';

class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
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
                <Variations />
            </div>
        );
    }
}

export default CardDetails;
