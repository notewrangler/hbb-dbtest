import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

// import { NEXT_CONCERT_CONTENT_STYLE, NEXT_CONCERT_PANEL_STYLE, O_N_LOGO_STYLE } from '../helpers/styles';
// const onLogo = "../../img/old_nat_logo.jpg";
// const posterImg = "img/posters/crooners-delight-poster.jpg";

const styles = {
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


class NextConcert extends Component {

  render() {
    let concertUrl = `concert-detail/${this.props.nextGig.id}`
    return (
			<div style={styles.panel} className="container">
				<div style={styles.content} className="row">
						<h3>Our Next Concert...</h3>

            <h1>{this.props.nextGig.title}</h1>
            <div>
            <Link to={concertUrl}>
              <img src={this.props.nextGig.posterUrl} style={styles.posterStyle}/>
            </Link>
						</div>
            <Link to={concertUrl} style={styles.buttonStyle}>
              <RaisedButton
              label="Order Tickets"
              labelStyle={styles.buttonLabel} />
            </Link>
        </div>
			</div>
    );
  }
}

export default NextConcert;


{/*
<h3>{this.props.nextC.date1} -- {this.props.nextC.time}</h3>
{this.props.nextC.date2 ?
<h3>{this.props.nextC.date2} -- {this.props.nextC.time}</h3>
 : null}
<p>{this.props.nextC.blurb}</p>
<h4>{this.props.nextC.guests}</h4> */}

{/* <p>Presented by: <img src={onLogo} style={O_N_LOGO_STYLE} /></p> */}
