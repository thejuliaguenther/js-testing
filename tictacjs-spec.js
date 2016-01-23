/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       expect(cellNumber1).toEqual(4);
       expect(cellNumber2).toEqual(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       expect(newBoardPiece).toEqual("O");
    });

//     END STEP 2

//     Add the following tests, or think of some of your own.

   it ("should update the board correctly based on the board", function () {
       board = ["X", null, null, "O", null, null, null, null, "X"];
       updateBoard();
       var cell0 = $("#cell-0").text();
       var cell3 = $("#cell-3").text();
       var cell8 = $("#cell-8").text();
       expect(cell0).toEqual("X");
       expect(cell3).toEqual("O");
       expect(cell8).toEqual("X");
   });
   
   it ("should not fill in board slots that are already occupied", function () {
    //placePiece returns False when the slot is already occupied 
       board = ["O", "O", null, null, null, null, null, "X", "X"];
       expect(placePiece(1,"X")).toBeFalsy();
   });
   
   it ("should be able to determine a winner", function () {
      
   });
//     it should not determine a winner when there is a tie
//     it should be able to deduce the correct cell number
//     it should be able to declare a tie and end the game

});
