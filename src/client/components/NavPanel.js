import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
// import { NAV_STYLE } from 'helpers/styles';

const closeButton = {
	marginLeft: 15,
	marginTop: 15
};

const openButton = {
	position: 'fixed',
	left: 170,
	color: 'white',
	zIndex: 1
};

export default class NavPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  handleToggle = () => {
		this.setState({open: !this.state.open});
	}

	handleSeries = () => {
		this.setState({open: false});

	}
  handleClose = () => {
		this.setState({open: false});

	}

  render() {
    return (
      <div>
        <FlatButton
					style={openButton}
					backgroundColor="#000000"
					hoverColor="#B7E0E5"
          label="Menu"
          onClick={this.handleToggle}
					/>

				<Drawer
					// style={NAV_STYLE}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
					<MenuItem onClick={this.handleClose}><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/series">Concerts</Link></MenuItem>
					<MenuItem onClick={this.handleClose}><Link to="/guests">Guest Artists</Link></MenuItem>
					<MenuItem onClick={this.handleClose}><Link to="/about-us">About Us</Link></MenuItem>


        </Drawer>
      </div>
    );
  }
}

// <FlatButton
// 	style={closeButton}
// 	label="Close"
// 	onClick={this.handleToggle}
// />

// <MenuItem onClick={this.handleClose}>Mailing List</MenuItem>
