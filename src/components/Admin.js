import React, {Component} from "react";
// import axios from "axios";
// import cors from 'cors';
// import {fetchData} from "../server/scraper"

var request = require("request");

var options = { method: 'POST', url: 'http://localhost:3001' };







class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FutbinURL: '',
            Review: '',
            Comparison:'',
            Rating:''
        }
    }

    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        request(options);
        console.log(console.log(JSON.parse(JSON.stringify(this.state))))
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    URL:
                    <input
                        type="text"
                        name="FutbinURL"
                        placeholder="FutbinURL"
                        value={this.state.FutbinURL}
                        onChange={this.handleChange}/>
                </label>

                <label>Review:
                    <input
                        type="text"
                        name="Review"
                        placeholder="Review"
                        value={this.state.Review}
                        onChange={this.handleChange}/>
                </label>

                <label>Comparison:
                    <input
                        type="text"
                        name="Comparison"
                        placeholder="Comparison"
                        value={this.state.Comparison}
                        onChange={this.handleChange}/>
                </label>

                <label>Rating:
                    <input
                        type="text"
                        name="Rating"
                        placeholder="Rating"
                        value={this.state.Rating}
                        onChange={this.handleChange}/>
                </label>

                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Admin