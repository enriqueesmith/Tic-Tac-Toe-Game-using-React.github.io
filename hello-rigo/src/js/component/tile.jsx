import React from "react";
import PropType from "prop-types";

export default class Tile extends React.Component {
	tileClick(props) {
		props.updateBoard(props.loc, props.turn);
	}
	render() {
		return (
			<div
				className={"tile " + this.props.loc}
				onClick={() => this.tileClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}

Tile.propTypes = {
	loc: PropType.number,
	value: PropType.string
};
