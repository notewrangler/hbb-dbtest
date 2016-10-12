import React from 'react';
import { Component } from 'react';

const splashUrl = '../../img/unsplash/solo-spot.jpeg';


const styles = {
	splash: {
		position: 'fixed',
		margin: 'auto',
		backgroundImage: 'url('+ splashUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		top: 0,
		backgroundPosition: 'top',
		height: '70em',
		zIndex: '-1'
	},
	photoCredit: {
		position: 'fixed',
		right: 0,
		top: 60,
		color: '#CCCCCC'
	},
	titleBlock: {
		marginBottom: '22%'
	},
	title: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: '6em',
		fontFamily: 'Federo',
		fontSize: '4em',
		color: '#13AFAA',
		zIndex: '-1'
	},
	subtitle: {
		margin: 'auto',
		textAlign: 'center',
		fontFamily: 'Federo',
		fontSize: '4em',
		color: '#85EAF2',
		zIndex: '-1'
	}
}


export default class GuestSplash extends Component {
	constructor(props){
		super(props)
	}
	render() {

		return (
			<div className='container-fluid'>
				<div style={styles.splash}>
					<p style={styles.photoCredit}>Photo Credit: <a href="https://unsplash.com/@devilcoders">Alexey Topolyanskiy</a></p>
				</div>
				<div style={styles.titleBlock}>
					<h2 style={styles.title}>Heartland Big Band</h2>
					<h1 style={styles.subtitle}>Special Guests</h1>
				</div>
			</div>
		)
	}
}
