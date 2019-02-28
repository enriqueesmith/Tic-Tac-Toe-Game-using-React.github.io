import React from "react";
import PropType from "prop-types";

export default class ResetButton extends React.Component {
	render() {
		return <button onClick={this.props.reset}>Reset</button>;
	}
}

ResetButton.propTypes = {
	reset: PropType.func
};
