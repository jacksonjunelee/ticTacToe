function Board() {
	this.cells = [];
	this.currentPlayer = null;
	this.winner = null;
	this.winnerFound = false;
}

Board.prototype.startGame = function() {
	if (this.cells.length) { this.cells = [] };
	for (var i = 0; i < 9; i++) {
		this.cells.push(new Cell());
	}
	this.currentPlayer = 1;
};

Board.prototype.makePlay = function(position) {
	var pieceToPlay = this.cells[position];
	if (pieceToPlay && pieceToPlay.playable()) {
		pieceToPlay.setState(this.currentPlayer);
		this.currentPlayer *= -1;
	}
};

Board.prototype.checkWin = function() {
	var row1, row2, row3, col1, col2, col3, diag1, diag2;
	var cellValues = this.cells.map(function(el, idx, cells) {
		return el.render();
	});
	row1 = cellValues[0] + cellValues[1] + cellValues[2];
	row2 = cellValues[3] + cellValues[4] + cellValues[5];
	row3 = cellValues[6] + cellValues[7] + cellValues[8];
	col1 = cellValues[0] + cellValues[3] + cellValues[6];
	col2 = cellValues[1] + cellValues[4] + cellValues[7];
	col3 = cellValues[2] + cellValues[5] + cellValues[8];
	diag1 = cellValues[0] + cellValues[4] + cellValues[8];
	diag2 = cellValues[2] + cellValues[4] + cellValues[6];

	this.checkRows(row1, row2, row3);
	this.checkColumns(col1, col2, col3);
	this.checkDiagonals(diag1, diag2);
	return this.winnerFound;
};

Board.prototype.checkRows = function(row1, row2, row3) {
	if (row1 === 3 || row2 === 3 || row3 === 3) {
		this.winnerFound = true;
		this.winner = 1;
	} else if (row1 === -3 || row2 === -3 || row3 === -3) {
		this.winnerFound = true;
		this.winner = -1;
	}
};

Board.prototype.checkColumns = function(col1, col2, col3) {
	if (col1 === 3 || col2 === 3 || col3 === 3) {
		this.winnerFound = true;
		this.winner = 1;
	} else if (col1 === -3 || col2 === -3 || col3 === -3) {
		this.winnerFound = true;
		this.winner = -1;
	}
};

Board.prototype.checkDiagonals = function(diag1, diag2) {
	if (diag1 === 3 || diag2 === 3) {
		this.winnerFound = true;
		this.winner = 1;
	} else if (diag1 === -3 || diag2 === -3) {
		this.winnerFound = true;
		this.winner = -1;
	}
};

Board.prototype.render = function() {
	var pieces = {'1': 'X', '-1': 'O', '0': '_'};
	var gameboard = [
		'Welcome to Tic Tac Toe',
		'----------------------',
		'|'+ pieces[this.cells[0].render()] +'|'+ pieces[this.cells[1].render()] +'|'+ pieces[this.cells[2].render()]+'|',
		'|'+ pieces[this.cells[3].render()] +'|'+ pieces[this.cells[4].render()] +'|'+ pieces[this.cells[5].render()]+'|',
		'|'+ pieces[this.cells[6].render()] +'|'+ pieces[this.cells[7].render()] +'|'+ pieces[this.cells[8].render()]+'|',
		'----------------------'
	];
	return gameboard.join('\n');
};

