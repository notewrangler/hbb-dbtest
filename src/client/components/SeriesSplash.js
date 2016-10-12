import React from 'react';
import { Component } from 'react';

const seriesImageUrl = 'img/theater/fort-stage-angle.jpg';
const fortHallUrl = 'img/theater/fort-hall-front.jpg';
const fortSignUrl = 'img/theater/fort-sign.jpg';

const styles = {
	splash: {
		position: 'fixed',
		left: -5,
		top: 0,
		width: '100%',
		backgroundImage: 'url(' + seriesImageUrl + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		margin: 'auto',
		marginTop: '40px',
		height: '55em',
		// zIndex: '-1'
	},
	title: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: '5.2em',
		color: '#13AFAA',
		fontFamily: 'Federo',
		fontSize: '4.7em',
		opacity: '0.9',
		zIndex: '1'
	},
	subtitle: {
		margin: 'auto',
		textAlign: 'center',
		color: '#85EAF2',
		fontFamily: 'Federo',
		fontSize: '3.5em',
		marginBottom: '2.5em',
		opacity: '0.9',
		zIndex: '1'
	},
	fortImg: {
		position: 'absolute',
		right: 0,
		bottom: 60,
		width: '20%',
		borderRadius: '20%'
	},
	fortSignImg: {
		position: 'absolute',
		left: 0,
		bottom: 60,
		width: '20%',
		borderRadius: '20%'
	},
	line: {
		display: 'inline',
		width: '20px',
		color: 'white'
	}
}

class SeriesSplash extends Component {
	render() {
		return (
				<div className="container-fluid">

					<div style={styles.splash}>
							<img src={fortHallUrl} style={styles.fortImg}/>
							<img src={fortSignUrl} style={styles.fortSignImg}/>
					</div>

					<div>
						<h1 style={styles.title}>Swingin' at the Fort</h1>
						<h2 style={styles.subtitle}>Heartland Big Band 2016-2017 Concert Series</h2>
					</div>

   		</div>

		);
	}
}

export default SeriesSplash;
