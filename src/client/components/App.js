import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import NavPanel from './NavPanel';
import NavBar from './NavBar';
import Contact from './Contact';
import MailingList from './MailingList';
import Footer from './Footer'

const splashImageUrl = 'img/bucket.jpg';

const styles = {

  logo: {
    position: 'fixed',
    top: 7,
    fontFamily: 'Federo',
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#13AFAA'
  },
  site: {
    display: 'flex',
    flexDirection: 'column',
    background: 'black',
    width: '100%',
  	backgroundImage: 'url(' + splashImageUrl + ')',
  	backgroundRepeat: 'no-repeat',
  	backgroundSize: 'cover',
  	backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    // marginBottom: '13em',
    minHeight: '100%',
    zIndex: '-1'
  },
  siteContent: {
    flex: '1',
    width: '100%',
    minHeight: '100%',
    marginBottom: '13em',
    opacity: '0.9'
  },
  header: {
    flex: 'none'
  },
  footer: {
    flex: 'none',
    position: 'absolute',
		// marginTop: '5%',
    bottom: 0,
		// marginBottom: 0,
    color: 'white',
    width: '100%',
    height: '13em'
  }
}

class App extends Component {
  render() {
    return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <div style={styles.site}>
            <NavBar style={styles.header}/>
              <div style={styles.siteContent}>
                {this.props.children}
              </div>
          </div>
          <Footer style={styles.footer}/>
        </div>
		  </MuiThemeProvider>
    );
  }
}

export default App;
