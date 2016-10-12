import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {addToMailingList} from '../api/api'
injectTapEventPlugin();


const ButtonStyle = {
  backgroundColor: 'white',
  color: 'black',
  fontFamily: 'federo',
  fontSize: '2em',
  zIndex: 1
}

export default class MailingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
			emailVal: '',
      fnameVal: '',
      lnameVal: '',
      streetVal: '',
			cityVal: '',
			stateVal: '',
			zipVal: '',
			phoneVal: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
      let postData = ({
          "email_address": this.state.emailVal,
          "email_type": "html",
          "status": "pending",
          "merge_fields": {
            "FNAME": this.state.fnameVal,
            "LNAME": this.state.lnameVal,
            "STREET1": this.state.streetVal,
            "CITY": this.state.cityVal,
            "STATE": this.state.stateVal,
            "POSTALCODE": this.state.zipVal,
            "PNONENUM": this.state.phoneVal
          },
          "vip": false
        });
    addToMailingList(postData);

    this.setState({
      emailVal: '',
      fnameVal: '',
      lnameVal: '',
      streetVal: '',
      cityVal: '',
      stateVal: '',
      zipVal: '',
      phoneVal: '',
      open: false
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleEmailChange = (event) => {
      this.setState({
        emailVal: event.target.value
      });
    };
  handleFNameChange = (event) => {
      this.setState({
        fnameVal: event.target.value
      });
    };
  handleLNameChange = (event) => {
      this.setState({
        lnameVal: event.target.value
      });
    };
	handleStreetChange = (event) => {
			this.setState({
				streetVal: event.target.value
			});
	};
	handleCityChange = (event) => {
			this.setState({
				cityVal: event.target.value
			});
	};
	handleStatesChange = (event) => {
    this.setState({
      stateVal: event.target.value});
    };

	handleZipChange = (event) => {
			this.setState({
				zipVal: event.target.value
			});
	};
	handlePhoneChange = (event) => {
			this.setState({
				phoneVal: event.target.value
			});
	};

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
          label="Join our Mailing List"
          onClick={this.handleOpen} />
        <Dialog
          title="Heartland Big Band Mailing List"
          actions={actions}
          modal={true}
          open={this.state.open}
        >

        <TextField
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.emailVal}
          onChange={this.handleEmailChange}
    		/>
				<TextField
          hintText="First Name"
          floatingLabelText="First Name"
          value={this.state.fnameVal}
          onChange={this.handleFNameChange}
    		/>
        <TextField
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lnameVal}
          onChange={this.handleLNameChange}
        />
        <TextField
          hintText="Street"
          floatingLabelText="Street"
					value={this.state.streetVal}
          onChange={this.handleStreetChange}
        />
				<TextField
          hintText="City"
          floatingLabelText="City"
				  value={this.state.cityVal}
          onChange={this.handleCityChange}
        />
			<TextField
					hintText="State"
					floatingLabelText="State"
					value={this.state.stateVal}
					onChange={this.handleStatesChange}

			 />
				<TextField
					hintText="Zip"
					floatingLabelText="Zip"
					value={this.state.zipVal}
					onChange={this.handleZipChange}
				/>
				<TextField
					hintText="999-999-9999"
					floatingLabelText="Phone"
					value={this.state.phoneVal}
					onChange={this.handlePhoneChange}
				/>

        </Dialog>
      </div>
    );
  }
}
