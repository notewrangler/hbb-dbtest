import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { CONCERTS_PANEL_STYLE, CONCERTS_CONTENT_STYLE } from '../helpers/styles';
import SeriesGuestLinks from './SeriesGuestLinks';

const styles = {
	bckg: {
		margin: 'auto',
		background: "#DDD9D9",
		width: '100%',
		marginTop: '30em',
		marginBottom: '-25em',
		borderRadius: '6px',
		opacity: '0.9',
		zIndex: '2'
	},
	address: {
		color: '#22A6AA',
		margin: 'auto',
		fontFamily: 'Federo',
		fontSize: '2.5rem',
		textAlign: 'center'
	},
	cardTitle: {
		fontSize: '2.8em'
	},
	cardSubTitle: {
		fontSize: '1.7em'
	},
	cardText: {
		fontSize: '1.5em'
	},
	cardDate: {
		fontSize: '2em'
	},
	buttonLabel: {
		fontSize: '1.2em',
		fontWeight: 'bold'
	}
};




export default class Series extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let {cid, title, subtitle, date1, date2, time, picUrl, blurb, guestTag, guests, bptid} = this.props
		let cDates = "";
		if (date2) {
			cDates = `${date1} & ${date2} -- ${time}`;
		} else {
			cDates = `${date1} -- ${time}`;
		}
		let concertUrl = `concert-detail/${cid}`
		return (
			<div style={styles.bckg}>
					<Card key={cid}>
					    <CardMedia
					      overlay={<CardTitle
								title={title}
								titleStyle={styles.cardTitle}
								subtitle={subtitle ? subtitle : null} />}
					    >
					      <img src={picUrl}/>
					    </CardMedia>
					    <CardTitle
								title={cDates}
								titleStyle={styles.cardDate}
							 />
							<SeriesGuestLinks
								style={styles.cardSubTitle}
								guestTag={guestTag}
								guests={guests} />
					    <CardText
								style={styles.cardText}>
					      {blurb}
					    </CardText>
					    <CardActions>
								<Link to={concertUrl}>
								<FlatButton
								label="Order Tickets"
								labelStyle={styles.buttonLabel} />
								</Link>
					    </CardActions>
					  </Card>
						<p style={styles.address}>Theater at the Fort: 8920 Otis Avenue, Lawrence, IN 46216</p>
				</div>

		)
	}
}
