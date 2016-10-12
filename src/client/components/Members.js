import React from 'react';
import { Component } from 'react';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import hbbk from '../data/wut'

const ButtonStyle = {
  position: 'relative',
	backgroundColor: '#696969',
  color: 'white',
	left: 420,
	bottom: 130,
  zIndex: 1
}

export default class Members extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			pVal: ""
		}
	}

	handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	handleSubmit = (e) => {
    e.preventDefault()

		if (this.state.pVal === hbbk.opt) {
			browserHistory.push('portal')
		} else {
			alert("Invalid Password")
		}

    this.setState({
      pVal: "",
      open: false
    });
  }


handlePwChange = (event) => {
		this.setState({
			pVal: event.target.value
		});
	}

render() {
		const actions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				onClick={this.handleSubmit}
			/>,
		];

		return (
			<div>
				<FlatButton
					style={ButtonStyle}
					backgroundColor="#000000"
					hoverColor="#B7E0E5"
					label="Band Member Portal"
					onClick={this.handleOpen} />

					<Dialog
						title="This Resource Requires a Password:"
						actions={actions}
						modal={true}
						open={this.state.open}
					>
					<TextField
						hintText="Password"
						floatingLabelText="Password"
						value={this.state.pVal}
						onChange={this.handlePwChange}
					/>
				</Dialog>

			</div>
		);
	}
}
