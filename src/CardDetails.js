import React, { Component } from 'react';
import './App.css';

class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <p className="p_color_g1 align_l f_s_10">
                    Product Title<br />
                    <input type="text" className="textbox"
                        placeholder="Enter Product title" />
                </p>
                <p className="p_color_g1 align_l f_s_10">
                    Price<br />
                    <span class="input-euro left">
                        <input type="number" className="textbox"
                            placeholder="Enter Price"
                        />
                    </span>
                </p>
                <p className="p_color_g1 align_l f_s_10">
                    Other Price<br />
                    <span class="input-euro left">
                        <input type="number" className="textbox"
                            placeholder="Enter Other Price" />
                    </span>
                </p>
                <p className="p_color_g1 align_l f_s_10">
                    Shipping Cost<br />
                    <span class="input-euro left">
                        <input type="number" className="textbox"
                            placeholder="Enter Shipping Cost"
                        />
                    </span>
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
        );
    }
}

export default CardDetails;
