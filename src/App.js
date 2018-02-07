import React, { Component } from 'react';

import Table from './Table';
import './App.css';

const tableStyle = {
  w: [3, 1, 1, 2, 1],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table tableStyle={tableStyle}/>
      </div>
    );
  }
}

export default App;
