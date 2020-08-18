import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

class Header extends Component {
    state = {
        height: '64px' ,
        boxshadow: '1px 1px 1px #f5f5f5'
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 100) {
          this.setState({height: '72px', boxshadow: '1px 1px 20px #777'})
        } else {
          this.setState({height: '64px', boxshadow: '1px 1px 1px #f5f5f5'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

    

    render() {

        return (
            <header style={{height: this.state.height}} style={{['box-shadow']: this.state.boxshadow}}>
                <NavLink to="/" className="big-title">FUT REVIEWS</NavLink>
                <nav>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </nav>
            </header>
        )
    }

}

export default Header
