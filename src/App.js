import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Panel } from 'react-bootstrap';
import './App.css';

const list = ["Apples", "Bananas", "Cherries"];

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <header>
          <h1 className="headline">Less Playground</h1>
        </header>
        <Panel>
          <ul className="my-list">
            { list.map(li => <li className="my-list-item"> {li} </li>) }
          </ul>
        </Panel>
      </Grid>
    );
  }
}

export default App;
