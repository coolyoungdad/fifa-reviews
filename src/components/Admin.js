import React, {Component} from "react";
import axios from 'axios'
// import {fetchData} from '../server/scraper';


class Admin extends Component {
    
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

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:3001`, this.state)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
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