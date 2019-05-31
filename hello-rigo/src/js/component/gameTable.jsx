import React from "react";

import Announcement from "./announcement.jsx";
import ResetButton from "./resetButton.jsx";
import Tile from "./tile.jsx";

//create your first component
export default class GameTable extends React.Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			winner: "s",
			turn: "x"
		};
	}

	resetBoard() {
		this.setState({
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			winner: "s",
			turn: "x"
		});
	}

	updateBoard(loc, player) {
		//Game Over!
		console.log(this.state.winner, this.state.turn, this.state.gameBoard);
		if (this.state.winner !== "s") {
			//make game over component visible
			console.log("Winner", this.state.winner);
			return;
		}
		if (
			this.state.gameBoard[loc] === "x" ||
			this.state.gameBoard[loc] === "o"
		) {
			//invalid move
			return;
		}
		let currentGameBoard = this.state.gameBoard;
		currentGameBoard.splice(loc, 1, this.state.turn);
		this.setState(
			{ gameBoard: currentGameBoard },
			function() {
				//Check if there is a winner or draw
				var moves = this.state.gameBoard.join("").replace(/ /g, "");
				console.log("Moves:", moves, "Winner:", this.state.winner);
				//Check if all moves are done and there is a winner.
				if (moves.length === 9 && this.state.winner === "s") {
					this.setState({ winner: this.state.turn });
					//Make game over component visible
					return;
					//Check if there is no winner after all the moves are done. If no winner, then there is a draw.
				} else if (moves.length === 9) {
					this.setState({ winner: "d" });
					//Make game over component visible
					return;
				} else {
					var topRow =
						this.state.gameBoard[0] +
						this.state.gameBoard[1] +
						this.state.gameBoard[2];
					if (topRow.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var middleRow =
						this.state.gameBoard[3] +
						this.state.gameBoard[4] +
						this.state.gameBoard[5];
					if (middleRow.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var bottomRow =
						this.state.gameBoard[6] +
						this.state.gameBoard[7] +
						this.state.gameBoard[8];
					if (bottomRow.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var leftCol =
						this.state.gameBoard[0] +
						this.state.gameBoard[3] +
						this.state.gameBoard[6];
					if (leftCol.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var middleCol =
						this.state.gameBoard[1] +
						this.state.gameBoard[4] +
						this.state.gameBoard[7];
					if (middleCol.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var rightCol =
						this.state.gameBoard[2] +
						this.state.gameBoard[5] +
						this.state.gameBoard[8];
					if (rightCol.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var leftDiag =
						this.state.gameBoard[0] +
						this.state.gameBoard[4] +
						this.state.gameBoard[8];
					if (leftDiag.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var rightDiag =
						this.state.gameBoard[2] +
						this.state.gameBoard[4] +
						this.state.gameBoard[6];
					if (rightDiag.match(/xxx|ooo/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					this.setState({
						turn: this.state.turn === "x" ? "o" : "x"
					});
				}
			},
			this
		);
	}

	render() {
		return (
			<div className="container">
				<div className="menu">
					<h1 className="pink">Tic Tac Toe using React JS</h1>
					<Announcement winner={this.state.winner} />
					<ResetButton reset={this.resetBoard.bind(this)} />
				</div>
				{this.state.gameBoard.map(
					function(value, i) {
						return (
							<Tile
								key={i}
								loc={i}
								value={value}
								updateBoard={this.updateBoard.bind(this)}
								turn={this.state.turn}
							/>
						);
					}.bind(this)
				)}
			</div>
		);
	}
}
