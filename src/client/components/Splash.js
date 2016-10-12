import React from 'react';
import { Component } from 'react';

const splashImageUrl = 'img/bucket.jpg';

const styles = {
  splash: {
    position: 'fixed',
  	width: '100%',
  	backgroundImage: 'url(' + splashImageUrl + ')',
  	backgroundRepeat: 'no-repeat',
  	backgroundSize: 'cover',
  	backgroundPosition: 'top',
  	margin: -10,
  	height: '70em',
  	zIndex: '-2'
  },
  titleBlock: {
    fontFamily: 'Federo',
    marginLeft: '54%'
  },
  title: {
    paddingTop: '3em',
  	paddingBottom: '0em',
  	fontSize: '6em',
  	fontWeight: 'bold',
  	color: '#725F5F'
  },
  subtitle: {
    marginLeft: '1em',
  	marginTop: '0em',
  	paddingTop: '0em',
  	letterSpacing: '1px',
  	fontSize: '5em',
  	fontWeight: 'bold',
  	color: '#725F5F'
  },
  slogan: {
  	fontSize: '2em',
  	fontWeight: 'bold',
  	paddingTop: '0.5em',
  	color: "#169692"
  }
}

class Splash extends Component {
  render() {
    return (
      <div className="container-fluid" style={styles.splash}>

      </div>
    );
  }
}

export default Splash;
