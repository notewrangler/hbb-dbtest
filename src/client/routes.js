import React from 'react';
import { Component } from 'react';
import { browserHistory } from 'react-router';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import App from './components/App';
import BandRoster from './components/BandRoster';
import Guests from './components/Guests';
import Series from './components/Series';
import Mission from './components/Mission';
import Director from './components/Director'
import ConcertDetail from './components/ConcertDetail';
import GuestDetail from './components/GuestDetail';
import Portal from './components/Portal'


class Routes extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
						<Route path="/roster" component={BandRoster} />
						<Route path="/guests" component={Guests} />
						<Route path="/series" component={Series} />
						<Route path="/about-us" component={Mission} />
						<Route path="/director" component={Director} />
						<Route path="/portal" component={Portal} />
						<Route path="/concert-detail/:id" component={ConcertDetail} />
						<Route path="/guest-detail/:id" component={GuestDetail} />
				</Route>
			</Router>
		);
	}
}

export default Routes;
