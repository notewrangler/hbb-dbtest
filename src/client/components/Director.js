import React from 'react';
import { Component } from 'react';

const bkgPhotoUrl = "../../img/unsplash/concert-hall-2.jpg";
const scottPic = "../../img/gsLutterman.jpg";

const styles = {
	splash: {
		position: 'relative',
		margin: 'auto',
		marginTop: '15%',
		backgroundImage: 'url('+ bkgPhotoUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		// marginTop: '-120px',
		top: 0,
		opacity: 0.3,
		backgroundPosition: 'top',
		// height: '70em'
		// zIndex: '-1'
	},
	photo: {
		minWidth: "70%",
		maxWidth: "95%",
		borderRadius: "5%"
	},
	blurb: {
		color: "white",
		marginBottom: "130px"

	},
	paragraph: {
		marginTop: '25px',
		fontSize: "1.8rem"
	},
	photoCredit: {
		position: 'fixed',
		opacity: 1,
		right: 8,
		top: 60,
		color: '#CCCCCC'
	}
}

 class Director extends Component {

	render() {
			return (
				<div className="container-fluid">
				{document.body.scrollTop = document.documentElement.scrollTop = 0}

					<div className="container" style={styles.splash}>
						<p style={styles.photoCredit}>Photo Credit: <a href="https://unsplash.com/@rgrzybowski" alt="large concert hall">Radek Grzybowski</a></p>
						<div className="row">
							<div className="col-md-5">
			    			<img src={scottPic} alt="Scott Lutterman" style={styles.photo}/>
			    		</div>
							<div className="col-md-7" style={styles.blurb}>
									<h1 style={{marginTop: "20px"}}>Artistic Director</h1>
									<h2>Scott Lutterman</h2>
									<h3>Greetings, Fellow Swing Enthusiasts</h3>
									<p style={styles.paragraph}>Our mission is simple…to keep alive and preserve the big band sound by providing a live performance of the great music that has withstood the test of time.  We exist because you, our audience, supports our cause through your love of swing music and your attendance to our concerts.  Our goal is to grow our audience and through your support and word of mouth, we hope to make our mission of preserving and presenting live big band jazz enjoyable for present and future audiences, young and old alike!</p>
			    		</div>
						</div>
					</div>
			</div>

		)
	}
}

export default Director;
