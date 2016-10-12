import React from 'react';
import { Component } from 'react';
import seriesList from '../data/seriesList';



const styles = {
	title: {
	margin: 'auto',
	textAlign: 'center',
	background: '#DDD9D9',
	fontSize: '4em',
	fontFamily: 'federo',
	color: 'white',
	marginTop: '20%',
	width: '100%',
	borderRadius: '5px'
},
wrapper: {
	marginBottom: '10%',
},
widget: {
	// marginLeft: '15%',
	marginTop: '10%',
	marginBottom: '5%',
	textAlign: 'center',
	// color: 'white'
},
noWidget: {
	margin: 'auto',
	background: '#DDD9D9',
	color: '#5E5858',
	marginTop:'40%',
	marginBottom: '20%',
	textAlign: 'center',
	width: '70%',
	borderRadius: '5px'
}
}

class ConcertDetail extends Component {

	render() {
		const cID = this.props.params.id;
		let concerti = []
		let concert = {}
		concerti = seriesList.filter(function(item){
			if (item.cid === cID) {
				return true
			} else {
				return false
			}
		});



		concert = concerti[0]
		const concertImg = concert.picUrl
		const bpthref = `http://www.brownpapertickets.com/event/${concert.bptid}`
		const script1 = document.createElement("script");
		const script2 = document.createElement("script");
		script1.src = `http://www.brownpapertickets.com/eventwidget.js?event=${concert.bptid}&nodescription=true`;
		script2.src = `http://www.brownpapertickets.com/widget_v651.js?event=${concert.bptid}`;

		document.body.appendChild(script1);
		document.body.appendChild(script2);

		const splashStyle = {
			position: 'fixed',
			top: 0,
			width: '100%',
			backgroundImage: 'url(' + concertImg + ')',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'top',
			margin: 'auto',
			marginTop: '40px',
			height: '70em',
			zIndex: '-1'
		}


		return (
			<div style={styles.wrapper}>

					<div style={splashStyle}>
					{document.body.scrollTop = document.documentElement.scrollTop = 0}
					</div>

					<div className="container">
						<div className="row" >
							<h1 style={styles.title}>{concert.title}</h1>
						</div>

						<div className="row">
							<div className="col-xs-6 col-md-12">
								{concert.bptid ?
									<div id="bpt_eventbody" style={styles.widget}>Brown Paper Tickets Ticket Widget Loading...
										<a href={bpthref}>Click Here</a> to visit the Brown Paper Tickets event page.
									</div> : null }
								{concert.bptid ? null :
									<div style={styles.noWidget}>
											<h2>Tickets are not yet available for this concert</h2>
									</div>
								}
							</div>
						</div>

    		</div>
			</div>
		);
	}
}

export default ConcertDetail;
