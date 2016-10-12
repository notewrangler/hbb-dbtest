import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Contact from './Contact';
import MailingList from './MailingList';


const styles = {
	logo: {
    fontFamily: 'Federo',
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#13AFAA'
  },
	drop: {
		width: '10em',
		textAlign: 'left',
		fontFamily: 'federo',
		fontSize: '1.5em'
	}
}


export default class NavBar extends Component {
	render() {
		return (
			<div>
			<Navbar inverse fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/" style={styles.logo}>Heartland Big Band</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavDropdown eventKey={1} title="Explore" id="basic-nav-dropdown" style={styles.drop}>
							<MenuItem eventKey={1.1} href="/" style={styles.drop}>Home</MenuItem>
							<MenuItem eventKey={1.2} href="/series" style={styles.drop}>Concerts</MenuItem>
							<MenuItem eventKey={1.3} href="/guests" style={styles.drop}>Guest Artists</MenuItem>
							<MenuItem eventKey={1.3} href="/director" style={styles.drop}>Artistic Director</MenuItem>
							<MenuItem eventKey={1.4} href="/about-us" style={styles.drop}>About Us</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={2} title="Stay in Touch" id="basic-nav-dropdown" style={styles.drop}>
							<Contact eventKey={2.1} />
							<MailingList eventKey={2.2} />
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
   		</div>

		)
	}

}
