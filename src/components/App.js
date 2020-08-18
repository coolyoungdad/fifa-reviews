import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Admin from './Admin'
import About from './About'
import Contact from './Contact'
import PostsContainer from './PostsContainer';

class App extends Component {
    state = {}

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <Header/>
                    </div>
                    <div>
                        <div className="app-container">
                            <Route exact path="/" component={PostsContainer}/>
                            <Route path="/admin" component={Admin}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </Router>
        )
    };
}

export default App;
