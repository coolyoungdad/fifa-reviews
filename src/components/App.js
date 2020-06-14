import React , {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Posts from './Posts'
import Header from './Header'

class App extends Component {
  state = {
    
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <div>
          <Posts />
        </div>
      </body>
    </div>
    )
  };
}

export default App;
