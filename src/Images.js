import React, { Component } from 'react';
import './App.css';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            files: {},
            file: null
        }
    }
    createfile = (e) => {
        e.preventDefault();
        if (this.refs.fileName) {
            var file = this.refs.fileName.value;
            if (typeof file === 'string' && file.length > 0) {
                this.refs.fileForm.reset();
            }
        }
    }

    handleChange(event) {
        var timestamp = (new Date()).getTime();
        this.state.files['Option ' + timestamp] = URL.createObjectURL(event.target.files[0]);
        this.setState({ files: this.state.files }, () => {
            this.refs.fileForm.reset();
        });
    }
    render() {
        return (
            <div className="h_200">
                <ul className="list-group" id="file_list">
                    {
                        Object.keys(this.state.files).map(function (key, index) {
                            return <li>
                                <img src={this.state.files[key]} width={50} height={50} />
                            </li>
                        }.bind(this))
                    }
                </ul>
                <div className="file_style">
                    <p className="inner1">

                        <div class="container1">

                            <img id="add-image" src="./images/images_upload.png"
                                />
                            <div className="centered">
                                <form className="form-inline" ref="fileForm"
                                    onSubmit={this.createfile}>
                                    <div className="form-group">
                                        {this.state.files.length || this.state.display ?
                                            <div className="image-upload">
                                                <label for="file-input">
                                                    <img src="./images/download.png" width={50} height={50} />
                                                </label>
                                                <input id="file-input" type="file"
                                                    onChange={(e) => this.handleChange(e)} />
                                            </div>
                                            : null}
                                    </div>
                                    <div className="button-align">

                                        {!this.state.display ?
                                            <button className="add" onClick={() => {
                                                this.setState({ display: true }, () => {
                                                    document.getElementById('add-image').style.display = "none";
                                                    document.getElementById('file_list').style.height = "150px";
                                                    document.getElementById('file_list').style.overflowY = "auto";
                                                    document.getElementsByClassName('inner1')[0].style.height = "100%";
                                                    document.getElementsByClassName('inner1')[0].style.display = "flex";
                                                    document.getElementsByClassName('inner1')[0].style.alignItems = "flex-end";
                                                    document.getElementsByClassName('inner1')[0].style.justifyContent = "center";

                                                })
                                            }} type="submit">+</button> : null}
                                    </div>
                                </form>
                                <br />
                                {
                                    !this.state.display ?
                                        <div>ADD MORE PHOTOS</div> : null
                                }
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        );
    }
}

export default Images;
