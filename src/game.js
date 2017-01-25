var game = {
	board: '',
	makeBoard: function() {
		this.board = new Board();
	},
	start: function() {
		this.makeBoard();
		this.board.startGame();
		console.log(this.board.render());
	},
	play: function(position) {
		this.board.makePlay(position);
		console.log(this.board.render());
		var playableCells = this.board.cells.map(function(cell) { return cell.playable(); });
		if (this.board.checkWin()) {
			var winner = this.board.winner === 1 ? 'X' : 'O';
			alert('A winner has been crowned! ' + winner + ' wins!');
			this.start();
		} else if (playableCells.indexOf(true) === -1) {
			alert('No winner! Game Over!');
			this.start();
		};
	}
};

window.onload = function() {
	document.body.addEventListener('keydown', function(event){
		var keyCodes = [48,49,50,51,52,53,54,55,56];
		var validPlay = keyCodes.indexOf(event.keyCode);
		if (validPlay !== -1) {
			game.play(validPlay);
		}
	});
}
