import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row } from 'reactstrap';
import './App.css';
import './card-config.css';
import Ionicon from 'react-ionicons';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
<div className="tab">
      <div className="App">

      <div>
      <h1></h1>
      </div>

      <div className="sec sec1">
      <h1 className="secN">Services</h1>
        <div className="services">
          <Card id="shop" body outline color="secondary">
            <CardTitle className="title">SCE Shop</CardTitle>
            <CardImg src="../img/shop.jpg" alt="Shop" />
            <CardText>
              <ul>
                <li>Snacks and beverages.</li>
                <li>Frozen Dinner and muffins.</li>
                <li>CMPE lab supplies.</li>
              </ul>
            </CardText>
            <Button>Shop</Button>
          </Card>

        </div>

        <div className="services">
          <Card id="locker" body outline color="primary">
            <CardTitle className="title">Locker Service</CardTitle>
            <CardImg src="../img/locker.png" alt="Locker" />
            <CardText>
              <ul>
                <li>30-pages limit per week.</li>
                <li>Reset every Sunday.</li>
              </ul>
            </CardText>
            <Button>Rent</Button>
          </Card>
        </div>
      </div>


      <div className="sec sec2">
      <h1 className="secN">Printers</h1>
        <div className="services">
          <Card id="d2" body outline color="success">
            <CardTitle className="title">2D-Printing Service</CardTitle>
            <CardImg src="../img/printer.jpg" alt="Printer-2D" />
            <CardText>
              <ul>
                <li>$10 per person.</li>
                <li>3 members per locker.</li>
              </ul>
            </CardText>
            <Button>Print</Button>
          </Card>
        </div>

        <div className="services">
          <Card id="d3" body outline color="info">
            <CardTitle className="title">3D-Printing Service</CardTitle>
            <CardImg src="../img/3d-printer.png" alt="Printer-3D" />
            <CardText>
              <ul>
                <li>Custom part printer service.</li>
                <li>Contact our 3D Printing Specialist Nicholas Papano at nicholas.papano@sjsu.edu about our ABS and PLA printing options.</li>
              </ul>
            </CardText>
            <Button>Print</Button>
          </Card>
        </div>
      </div>


      <div className="sec sec3">
      <h1 className="secN">Accessories</h1>
        <div className="services">
          <Card id="hardware" body outline color="warning">
            <CardTitle className="title">Hardware Station</CardTitle>
            <CardImg src="../img/hardware.jpg" alt="Hardware Station" />
            <CardText>
              <ul>
                <li>ESD benches.</li>
                <li>Soldering tools, Soldering irons, and fume fans.</li>
                <li>Power supplies and multimeters.</li>
              </ul>
            </CardText>
            <Button>Start Hacking</Button>
          </Card>
        </div>

        <div className="services">
          <Card id="monitor" body outline color="danger">
            <CardTitle className="title">Monitor Service</CardTitle>
            <CardImg src="../img/monitor.jpg" alt="Monitor" />
            <CardText>
              <ul>
                <li>Every table at SCE comes with a monitor for you.</li>
              </ul>
            </CardText>
            <Button>Monitor</Button>
          </Card>
        </div>
      </div>

      </div>
</div>
    );
  }
}

export default App;
