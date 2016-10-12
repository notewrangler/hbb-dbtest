import React from 'react';
import { Component } from 'react';

const missionImageUrl = '../../img/bigband.jpg'


const styles = {
	splash: {
		position: 'fixed',
		margin: 'auto',
		backgroundImage: 'url('+ missionImageUrl +')',
		width: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		top: 0,
		backgroundPosition: 'top',
		height: '100%',
		zIndex: '-1'
	},
	title: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: '3em',
		fontFamily: 'Federo',
		fontSize: '4em',
		color: '#13AFAA',
		zIndex: '-1'
	},
	subtitle: {
		margin: 'auto',
		marginBottom: '3em',
		textAlign: 'center',
		fontFamily: 'Federo',
		fontSize: '4em',
		color: '#85EAF2',
		zIndex: '-1'
	},
	missionPage: {
		height: '60em',
		width: '100%',
		marginTop: '50px',
		background: 'black'
	},
	missionPanel: {
		marginTop: '20%',
		margin: 'auto',
		width: '70%',
		background: 'black',
		paddingBottom: '12em',
		opacity: '0.8',
		color: 'white'
	}
}


export default class Mission extends Component {
	render() {
		return (
			<div>
					<div style={styles.splash}></div>
					<div>
						<h2 style={styles.title}>Heartland Big Band</h2>
						<h1 style={styles.subtitle}>About Us</h1>
					</div>
					<div className="container" style={styles.missionPanel}>
						<h1>The Mission</h1>

						<p>The <span style={{fontWeight: 'bold', color: '#85EAF2'}}>Heartland Jazz Heritage Foundation</span> is a not for profit organization dedicated to producing, performing and providing education to all audiences for the further advancement and preservation of jazz.</p>

						<h2>About the Heartland Jazz Arts Group...</h2>

						<p>The <span style={{fontWeight: 'bold', color: '#85EAF2'}}>Heartland Jazz Arts Group, Inc.</span> was formed in 2014 with one purpose in mind…to perform, expand, preserve, advance, and educate the appreciation of big band and jazz instrumental and vocal jazz music throughout the Midwest.  This would be accomplished by providing opportunities for performance, education, and entertainment for audiences, musicians, educators, students, and jazz enthusiasts.  This mission has been primarily achieved by the presentation of big band jazz featuring the Heartland Big Band, the Midwest’s “Symphony for Big Band Music”.  Established in 2004, the HBB has achieved its professional status through the performance, dedication, and commitment of its members and their pursuit of one goal…to achieve excellence towards the preservation, education, and performance of the vast scope of big band literature in a live setting to audiences.</p>
						<p>Using the <span style={{fontWeight: 'bold', color: '#85EAF2'}}>Heartland Big Band</span> as our “Symphony” of big band jazz, the formation of this group and implementation of an active performing big band will help other organizations, businesses, and educational institutions with the same goal of promoting jazz appreciation and live performance.</p>

						<h2>What We Do</h2>

						<p>The <span style={{fontWeight: 'bold', color: '#85EAF2'}}>Heartland Big Band</span> is the primary performing ensemble of the <span style={{fontWeight: 'bold', color: '#85EAF2'}}>Heartland Jazz Heritage Foundation</span>.  Just as classical orchestras perform great Symphonic music, the Heartland Big Band preserves and performs great big band music!</p>
						<p>Since 2004, we've enjoyed performing the big band sound through our live concert performances of yesterday and today's swingin' music.  Performing standards using the Great American Songbook and the Great American 'Swing' Book, our mission is to continue to keep our true American art form of jazz and swing alive in the heartland of America!</p>
						<p>Our themed concerts have audiences coming back for more as we present original arrangements and transcriptions of some of your favorite vocal and big band songs!  Join the Heartland Big Band and special guest vocalists as they present today's big band sounds in a LIVE concert performance of America's only true art form of swing music!</p>
				 </div>
   		</div>
		)
	}
}
