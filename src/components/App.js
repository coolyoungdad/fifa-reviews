import React , {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Posts from './Posts'
import Header from './Header'
import Footer from './Footer'

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
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
    )
  };
}

export default App;
