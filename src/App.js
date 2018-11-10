import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Ionicon from 'react-ionicons';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <h1></h1>
      </div>

      <div className="sec sec1">
        <div className="services">
          <Ionicon className="icon" icon="ios-basket-outline" fontSize="35px"/>
        </div>

        <div className="services">
          <Ionicon className="icon" icon="ios-lock-outline" fontSize="35px"/>
        </div>
      </div>


      <div className="sec sec2">
        <div className="services">
          <Ionicon className="icon" icon="ios-print-outline" fontSize="35px"/>
        </div>

        <div className="services">
          <Ionicon className="icon" icon="ios-cube-outline" fontSize="35px"/>
        </div>
      </div>


      <div className="sec sec3">
        <div className="services">
          <Ionicon className="icon" icon="ios-construct-outline" fontSize="35px"/>
        </div>

        <div className="services">
         <Ionicon className="icon" icon="ios-desktop-outline" fontSize="35px"/>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
