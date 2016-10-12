import React from 'react';
import {Component} from 'react';
import Crooners from '../data/crooners';

const tunePath = "/server/memberPortal/files/"


export default class Portal extends Component {
	render(){
		return(
			<div style={{backgroundColor: '#4d4d4d'}}>
			<div className="container" style={{marginTop: '50px', color: '#F8F8FF'}}>
				<h1 style={{textAlign: 'center', fontSize: '4em', color: '#1FD3CD', fontFamily: 'Federo'}}>
				Heartland Big Band Member Portal</h1>
				<div className="col-md-7">
					<h2>October 1, 2016 "A Crooners Delight"</h2><br/>
					<p><b>Rehearsals:</b></p>
					<h4>Sept 18, 25 REHEARSE 6pm Lawrence Central HS</h4>
					<h4>Sept 29 (Thursday) DRESS REHEARSAL 7pm (at the Fort)</h4><br/>
					<div style={{border: '1px solid grey', borderRadius: '5px', padding: '10px'}}>
						<h2 style={{textAlign: 'center'}}><b>Practice Tracks</b></h2>
						<hr></hr>
							{Crooners.map(function(tune){
								let tuneUrl = "";
								{tune.url ? tuneUrl = tunePath + tune.url : null}
								return (
									<div key={tune.id}>
									<p>{tune.title}</p>
										{tune.url ? <audio src={tuneUrl}
										preload="auto"
										controls></audio> : <p>(no recording available)</p> }
										<hr></hr>
									</div>
								)
								})}
     			</div>

    		</div>
				<div className="col-md-5">
					<div style={{marginTop: '90px'}}>
						<p><b>Performance:</b></p>
						<h5>Saturday, Oct 1, 2016 @ 7:00 PM</h5>
						<h5>Theater at the Fort</h5>
     			</div>
					<div>
     				<h2 style={{marginTop: '50px'}}>Concert Order</h2>
							{Crooners.map(function(tune){
								return <p key={tune.id}>{tune.title}</p>
							})}
     			</div>
    		</div>
   		</div>
		</div>
		)
	}
}
