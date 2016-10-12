import React from 'react';
import { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSeries } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  titleBlock: {
    fontFamily: 'Federo',
    marginBottom: '10%'
  },
  title: {
    paddingTop: '3em',
    paddingBottom: '0em',
    fontSize: '6em',
    fontWeight: 'bold',
    color: '#13AFAA'

  },
  subtitle: {
    marginTop: '0em',
    paddingTop: '0em',
    letterSpacing: '1px',
    fontSize: '5em',
    fontWeight: 'bold',
    color: '#13AFAA'

  },
  slogan: {
    fontSize: '2em',
    marginLeft: '2em',
    fontWeight: 'bold',
    color: '#33A1FF'
  },
  panel: {
    background: '#F7FFFC',
  	margin: 'auto',
  	backgroundSize: 'cover',
  	marginTop: '10%',
    marginBottom: '6%',
  	height: '120em',
  	borderRadius: '10px'
  },
  content: {
    width: '80%',
  	margin: 'auto',
  	paddingTop: 15,
    paddingBottom: 20,
  	fontFamily: 'Arial'
  },

  posterStyle: {
    margin: 'auto',
    width: '100%'
  },
  buttonLabel: {
		fontSize: '1.8em',
		fontWeight: 'bold'
	},
  buttonStyle: {
    margin: 'auto',
    textAlign: 'center'
  },
  oldNatLogo: {
    width: '300px'
  }
}



const TitleBlock = () => (
  <div className="container-fluid">
    <div style={styles.titleBlock}>
      <div className='row'>
        <div className='col-md-3 col-md-offset-6'>
          <h1 style={styles.title}>Heartland</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 col-md-offset-7'>
          <h3 style={styles.subtitle}>Big Band</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-md-offset-6'>
          <h4 style={styles.slogan}>Indiana's Premier Big Band Concert Experience</h4>
        </div>
      </div>
    </div>
  </div>
);

class Home extends Component {
  static PropTypes = {
    series: PropTypes.array.isRequired
  }

  componentWillMount() {
    this.props.getSeries()
  }

  getNext(seriesArray) {
  	const today = new Date;
    let gig = [];
    console.log(seriesArray);
  	gig = seriesArray.reduce(function(a,b){
  			var next = new Date(a.nextDay)
  			if (Date.parse(next) >= Date.parse(today)) {
  				return a
  			} else {
  				return b
  			}
  		});
  		return gig;
  	}

  renderNextConcert() {
    console.log(this.props.series);
    const today = new Date;
    return this.getNext(this.props.series.seriesList).map((concert) => {
      return (
        <div style={styles.panel} className="container">
          <div style={styles.content} className="row">
              <h3>Our Next Concert...</h3>
              <h1>{concert.title}</h1>
              <div>
              <Link to={`concert-detail/${concert.id}`}>
                <img src={concert.posterUrl} style={styles.posterStyle}/>
              </Link>
              </div>
              <Link to={`concert-detail/${concert.id}`} style={styles.buttonStyle}>
                <RaisedButton
                label="Order Tickets"
                labelStyle={styles.buttonLabel} />
              </Link>
          </div>
        </div>
      );
    })
  }

  render() {
    console.log(this.props.series);
    return (
      <div>
          <TitleBlock />
          {this.renderNextConcert()}
      </div>

    );
  }
}


function mapStateToProps(state) {
  return {series: state};
}


export default connect(mapStateToProps, { getSeries } )(Home);
