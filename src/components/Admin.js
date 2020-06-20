import React, {Component} from "react";
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
        console.log(console.log(JSON.parse(JSON.stringify(this.state))))
        event.preventDefault();
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