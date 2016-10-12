import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonStyle = {
  position: 'fixed',
  top: 55,
  left: 5,
  color: 'white',
  fontFamily: 'federo',
  zIndex: 3
}

export default class Map extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      open: false
		}
	}

	handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	render(){
		const actions = [
      <RaisedButton
        label="Close"
        secondary={true}
        onClick={this.handleClose}
      />
		]
		return (
			<div>
				<FlatButton
					style={ButtonStyle}
					backgroundColor="#000000"
					hoverColor="#B7E0E5"
					label="Map to Theater at the Fort"
					onClick={this.handleOpen} />

					<Dialog
						title="Map to the Fort"
						actions={actions}
						modal={true}
						open={this.state.open}
					>
					<div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.768443079402!2d-86.01358168462104!3d39.85702197943401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4b89efd7badf%3A0xaadacfc66324ed10!2s8920+Otis+Ave%2C+Indianapolis%2C+IN+46216!5e0!3m2!1sen!2sus!4v1474788012027" width="400"
					height="300"
					frameBorder="0"
					style={{border:0}}
					allowFullScreen></iframe>
     			</div>

				</Dialog>

			</div>
		)
	}
}
