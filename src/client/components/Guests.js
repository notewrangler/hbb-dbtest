import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import GuestCardData from '../data/guestCard';
import GuestSplash from './GuestSplash';
import GuestPhotoGrid from './GuestPhotoGrid';


class Guests extends Component {
  render() {
    return (
			<div className="container-fluid">
					<GuestSplash
					/>
    			<GuestPhotoGrid
						guests={GuestCardData}
					/>
    	</div>
    );
  }
}

export default Guests;


//  }
