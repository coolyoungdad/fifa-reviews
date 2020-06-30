import React , {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Admin from './Admin'
import PostsContainer from './PostsContainer';

class App extends Component {
  state = {
    
  }

  render () {
    return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div>
        <div>
          <Admin />
          <PostsContainer />
        </div>
      </div>
        <div>
          <Footer />
        </div>     
    </div>
    )
  };
}

export default App;
