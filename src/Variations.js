import React, { Component } from 'react';
import './App.css';

class Variations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            variations: {
            }
        }
    }
    createVariation = (e) => {
        e.preventDefault();
        if (this.refs.variationName) {
            var variation = this.refs.variationName.value;
            if (typeof variation === 'string' && variation.length > 0) {
                this.addVariation(variation);
                this.refs.variationForm.reset();
            }
        }
    }

    addVariation(variation) {
        var timestamp = (new Date()).getTime();
        this.state.variations['Option ' + timestamp] = variation;
        this.setState({ variations: this.state.variations });
    }
    render() {
        return (
            <div className="h_300">
                <ul className="list-group" id="variation_list">
                    {
                        Object.keys(this.state.variations).map(function (key, index) {
                            return <div>
                                Option {index + 1}
                                <br />
                                <li>
                                    <input type="text"
                                        className="textbox"
                                        value={this.state.variations[key]} />
                                </li>
                            </div>
                        }.bind(this))
                    }
                </ul>
                <div className="variation_style">
                    <p className="inner">
                        <form className="form-inline" ref="variationForm"
                            onSubmit={this.createVariation}>
                            <div className="form-group">
                                {this.state.variations.length || this.state.display ?
                                    <input type="text" className="textbox"
                                        ref="variationName" placeholder="Add option name"
                                    /> : null}
                            </div>
                            <div className="button-align">
                                <button className="add" onClick={() => {
                                    this.setState({ display: true },()=>{
                                        document.getElementById('variation_list').style.height = "150px";
                                        document.getElementById('variation_list').style.overflowY = "auto";

                                        document.getElementsByClassName('inner')[0].style.verticalAlign = "bottom";
                                    })
                                }} type="submit">+</button>
                            </div>
                        </form>
                        <br />
                        {
                            !this.state.display ?
                                <div>Have variations to your product like
                            size, color and more?</div> :
                                <div>Add more Variations</div>
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export default Variations;
