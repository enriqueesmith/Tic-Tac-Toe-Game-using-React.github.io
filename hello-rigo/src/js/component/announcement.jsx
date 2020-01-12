import React from "react";
import PropType from "prop-types";

export default class Announcement extends React.Component {
	render() {
		var message = "";
		if (this.props.winner === "d") message = "It's a draw.";
		else message = `${this.props.winner.toUpperCase()} is the winner!`;

		return (
			<div className={this.props.winner !== "s" ? "visible" : "hidden"}>
				<h2>Game Over : {message}</h2>
			</div>
		);
	}
}

Announcement.propTypes = {
	winner: PropType.string
};
