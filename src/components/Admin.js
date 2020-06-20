import React from "react";

export default class Form extends React.Component {
    state = {
        FutbinURL: "",
        Review: "",
        Comparison: "",
        Rating:""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value, 
        });
 }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    //     this.props.onSubmit(this.state);
    //     this.setState({FutbinURL: "",
    //     Review: "",
    //     Comparison: "",
    //     Rating:""})
    // }

    render() {
        return (
            <form>
                <input
                    name="FutbinURL"
                    placeholder="Futbin player page URL"
                    value
                    ={this.state.FutbinURL}
                    onChange={e => this.change(e)}/>

                <input
                    name="Review"
                    placeholder="Review"
                    value
                    ={this.state.Review}
                    onChange={e => this.change(e)}/>

                <input
                    name="Comparisons"
                    placeholder="Comparisons"
                    value
                    ={this.state.Comparison}
                    onChange={e => this.change(e)}/>

                <input
                    name="Ratings"
                    placeholder="Ratings"
                    value
                    ={this.state.Rating}
                    onChange={e => this.change(e)}/>

                <button >
                    Submit
                </button>
            </form>
        )
    }
}