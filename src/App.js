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
      <h1 id="title">sce services for members</h1>
      </div>

      <div className="sec sec1">
      <h1 className="secN">Services</h1>
        <div className="services">
          <Card id="shop" body outline color="secondary">
            <CardTitle className="title">SCE Shop</CardTitle>
            <CardImg id="ishop" src="../img/shop.png" alt="Shop" />
            <CardText id="text">
              <ul>
                <li>Snacks and beverages.</li>
                <li>Frozen Dinner and muffins.</li>
                <li>CMPE lab supplies.</li>
              </ul>
            </CardText>
            <Button className="button" id="bshop">Shop</Button>
          </Card>

        </div>

        <div className="services">
          <Card id="locker" body outline color="primary">
            <CardTitle className="title">Locker Service</CardTitle>
            <CardImg id="ilocker" src="../img/locker.png" alt="Locker" />
            <CardText id="text">
              <ul>
                <li>$10 per person.</li>
                <li>3 members per locker.</li>
              </ul>
            </CardText>
            <Button className="button" id="blocker">Rent</Button>
          </Card>
        </div>
      </div>


      <div className="sec sec2">
      <h1 className="secN">Printers</h1>
        <div className="services">
          <Card id="d2" body outline color="success">
            <CardTitle className="title">2D-Printing Service</CardTitle>
            <CardImg id="id2" src="../img/printer.png" alt="Printer-2D" />
            <CardText id="text">
              <ul>
                <li>30-pages limit per week.</li>
                <li>Reset every Sunday.</li>
              </ul>
            </CardText>
            <Button className="button" id="bd2">Print</Button>
          </Card>
        </div>

        <div className="services">
          <Card id="d3" body outline color="info">
            <CardTitle className="title">3D-Printing Service</CardTitle>
            <CardImg id="id3" src="../img/3d-printer.png" alt="Printer-3D" />
            <CardText id="text">
              <ul>
                <li>FREE TISSUE</li>
                <li>I HAVE ISSUE</li>
              </ul>
            </CardText>
            <Button className="button" id="bd3">Print</Button>
          </Card>
        </div>
      </div>


      <div className="sec sec3">
      <h1 className="secN">Accessories</h1>
        <div className="services">
          <Card id="hardware" body outline color="warning">
            <CardTitle className="title">Hardware Station</CardTitle>
            <CardImg id="ihardware" src="../img/hardware.png" alt="Hardware Station" />
            <CardText id="text">
              <ul>
                <li>ESD benches.</li>
                <li>Soldering tools, Soldering irons, and fume fans.</li>
                <li>Power supplies and multimeters.</li>
              </ul>
            </CardText>
            <Button className="button" id="bhardware">Start Hacking</Button>
          </Card>
        </div>

        <div className="services">
          <Card id="monitor" body outline color="danger">
            <CardTitle className="title">Monitors and Keyboards</CardTitle>
            <CardImg id="imonitor" src="../img/monitor.png" alt="Monitor" />
            <CardText id="text">
              <ul>
                <li>Every table at SCE comes with a monitor for you.</li>
              </ul>
            </CardText>
            <Button className="button" id="bmonitor">Monitor</Button>
          </Card>
        </div>
      </div>

      </div>
</div>
    );
  }
}

export default App;
