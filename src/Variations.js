import React, { Component } from 'react';
import './App.css';

class Variations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variations: {
            }
        }
    }
    createVariation = (e) => {
        e.preventDefault();
        var variation = this.refs.variationName.value;
        if (typeof variation === 'string' && variation.length > 0) {
            this.addVariation(variation);
            this.refs.variationForm.reset();
        }
    }

    addVariation(variation) {
        var timestamp = (new Date()).getTime();
        this.state.variations['Option ' + timestamp] = variation;
        this.setState({ variations: this.state.variations });
    }
    render() {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="container">
                    <ul className="list-group text-center">
                        {
                            Object.keys(this.state.variations).map(function (key) {
                                return <li>{this.state.variations[key]}</li>
                            }.bind(this))
                        }
                    </ul>
                </div>
                {/* <div className="variation_style">
                        <p className="inner">Have variations to your product like
                        size, color and more?
                    </p>
                    </div> */}
                <form className="form-inline" ref="variationForm" onSubmit={this.createVariation}>
                    <div className="form-group">
                        <input type="text" className="textbox"
                            ref="variationName"
                        />
                    </div>
                    <br/>
                    <button type="submit">+</button>
                </form>
            </div>
        );
    }
}

export default Variations;
