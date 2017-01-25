describe("Board", function() {
	var board;
	beforeEach(function() {
		board = new Board();
	});

	describe("winner", function() {
		it("should have a winner", function() {
			expect(board.winner).toBeDefined();
		});

		it("does not start with a winner found", function() {
			expect(board.winner).toBe(null);
		});
	});

	describe("cells", function() {
		it("should have cells", function() {
			expect(board.cells).toBeDefined();
		});

		it("does not start with cells", function() {
			expect(board.cells.length).toBe(0);
		});
	});

	describe("currentPlayer", function() {
		it("should store the current player's state", function() {
			expect(board.currentPlayer).toBeDefined();
		});
	});

	describe("startGame", function() {
		beforeEach(function() {
			board.startGame();
		});

		it("should add cells to the game board", function() {
			expect(board.cells.length).toBe(9);
		});

		it("should set the currentPlayer state", function() {
			expect(board.currentPlayer).toBe(1);
		});
	});

	describe("makePlay", function() {
		beforeEach(function() {
			board.startGame();
			board.makePlay(0);
		});

		it("should add a value to a piece on the board", function() {
			expect(board.cells[0].render()).toBe(1);
		});

		it("should change the currentPlayer state", function() {
			expect(board.currentPlayer).toBe(-1);
		});

		it("should not make a play if the piece has been played already", function() {
			board.makePlay(0);
			expect(board.currentPlayer).toBe(-1);
		});
	});

	describe("checkWin", function() {
		beforeEach(function() {
			board.startGame();
			board.makePlay(0);
			board.makePlay(1);
			board.makePlay(3);
			board.makePlay(4);
			board.makePlay(6);
		});

		it("checks for a winning play", function() {
			expect(board.checkWin()).toBe(true);
		});

		it("sets the winner to the current player", function() {
			board.checkWin();
			expect(board.winner).toBe(1);
		});
	});
});