import React , {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Posts from './Posts'
import Header from './Header'
import Footer from './Footer'
import Admin from './Admin'

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
          <Posts />
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
