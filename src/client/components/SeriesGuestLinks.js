import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';


export default class SeriesGuestLinks extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { guestTag, guests } = this.props;
		return (
			<h3 style={{paddingLeft: '17px', color: '#737373'}}>
			<span >{guestTag}</span>
				{guests.length > 0 ?
					guests.map(function(artist){
						let guestUrl = `guest-detail/${artist.id}`
						return <span key={artist.id}><Link to={`guest-detail/${artist.id}`}>{artist.name}</Link></span>
					}) : <span> TBA</span>
				}
			</h3>
		)
	}
}
