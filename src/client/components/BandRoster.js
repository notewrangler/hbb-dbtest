import React from 'react';
import { Component } from 'react';

const style = {
	margin: 'auto',
	textAlign: 'center',
	marginTop: '5em'
}

class BandRoster extends Component {
  render() {
    return (
      <div className="container">
          <h1 style={style}>This is the Band Members Page.</h1>
      </div>

    );
  }
}

export default BandRoster;
