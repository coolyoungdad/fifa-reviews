import React, {Component} from "react";
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
require('dotenv').config()



class Admin extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            FutbinURL: '',
            FutwizURL: '',
            Review: '',
            Comparison: '',
            Rating: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async(event) => {
        const APP_HOST = process.env.REACT_APP_APP_HOST;
        console.log(APP_HOST)
        event.preventDefault();
        await axios
            .post(APP_HOST, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>

                <form className="admin-wrapper" onSubmit={this.handleSubmit}>
                    <h1>Write a review!</h1>

                    <label className="label-fields">
                        Futbin:<br/>
                        <input
                            type="text"
                            name="FutbinURL"
                            placeholder="FutbinURL"
                            rows="10"
                            cols="30"
                            value={this.state.FutbinURL}
                            onChange={this.handleChange}/>
                    </label>

                    <label className="label-fields">
                        Futwiz:<br/>
                        <input
                            type="text"
                            name="FutwizURL"
                            placeholder="FutwizURL"
                            rows="10"
                            cols="30"
                            value={this.state.FutwizURL}
                            onChange={this.handleChange}/>
                    </label>

                    <label className="label-fields">Review:<br/>
                        <textarea
                            type="text"
                            name="Review"
                            placeholder="Review"
                            rows="10"
                            cols="30"
                            value={this.state.Review}
                            onChange={this.handleChange}/>
                    </label>

                    <label className="label-fields">Comparison:<br/>
                        <textarea
                            type="text"
                            name="Comparison"
                            placeholder="Comparison"
                            rows="5"
                            cols="30"
                            value={this.state.Comparison}
                            onChange={this.handleChange}/>
                    </label>

                    <label className="label-fields">Rating:<br/>
                        <textarea
                            type="text"
                            name="Rating"
                            placeholder="Rating"
                            rows="5"
                            cols="30"
                            value={this.state.Rating}
                            onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Admin