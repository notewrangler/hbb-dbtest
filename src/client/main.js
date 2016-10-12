import React from 'react';
import Routes from './routes'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import reducers from './store';
import { browserHistory } from 'react-router';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import BandRoster from './components/BandRoster';
import Guests from './components/Guests';
import Series from './components/Series';
import Mission from './components/Mission';
import Director from './components/Director'
import ConcertDetail from './components/ConcertDetail';
import GuestDetail from './components/GuestDetail';
import Portal from './components/Portal';

let loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});


const store = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)(reducers);

// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>
  , document.getElementById('app'));
// import { Router, Route, browserHistory } from 'react-router';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// // Layout
// import ExampleLayout from 'layout/example';

// // UI
// import ExampleComponent from 'ui/example';

// const Site = (
//   <MuiThemeProvider>
//     <Router history={browserHistory}>
//       <Route component={ExampleLayout}>
//         <Route path="/" component={ExampleComponent} />
//         <Route path="/example" component={ExampleComponent} />
//       </Route>
//     </Router>
//   </MuiThemeProvider>
// );

// const root = document.getElementById('app')
//
// render(<Routes />, root)

// render(Site, document.getElementById('app'));
