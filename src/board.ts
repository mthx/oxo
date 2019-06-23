export type Mark = "X" | "O";
export type MaybeMark = Mark | undefined;
export type BoardLine = [MaybeMark, MaybeMark, MaybeMark];
export type Board = [BoardLine, BoardLine, BoardLine];

/**
 * A new blank board.
 */
export const blankBoard: () => Board = () => [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];

/**
 * Yields all the lines in the board (row/column/diagonal).
 * All the rows top-to-bottom, then all the columns left-to-right
 * then the top-left to bottom right diagonal then the remaining one.
 * @param board A board.
 */
function* lines(board: Board): IterableIterator<BoardLine> {
  for (const row of board) {
    yield row;
  }
  for (let column = 0; column < 3; ++column) {
    yield [board[0][column], board[1][column], board[2][column]];
  }
  yield [board[0][0], board[1][1], board[2][2]];
  yield [board[0][2], board[1][1], board[2][0]];
}

export interface Winner {
  mark: Mark,
  isWinningCell(row: number, column: number): boolean;
}


/**
 * Returns the winner or undefined.
 * @param board The board.
 */
export function checkWinner(board: Board): Winner | undefined {
  let lineNumber = 0;
  for (const line of lines(board)) {
    if (line[0] !== undefined && line[0] === line[1] && line[1] === line[2]) {
      return {
        mark: line[0],
        isWinningCell: (row: number, column: number) => {
          if (lineNumber < 3) {
            return row === lineNumber;
          }
          if (lineNumber < 6) {
            return column === lineNumber - 3;
          }
          if (lineNumber === 6) {
            return (row === 0 && column === 0) || (row === 1 && column === 1) || (row === 2 && column === 2);
          }
          if (lineNumber === 7) {
            return (row === 0 && column === 2) || (row === 1 && column === 1) || (row === 2 && column === 0);
          }
          throw new Error(`Unexpected line number: ${lineNumber}`);
        }
      };
    }
    lineNumber++;
  }
  return undefined;
}

export function isFull(board: Board): boolean {
  return board.every(row => row.every(x => !!x));
}

export interface Move {
  player: Mark;
  row: number;
  column: number;
}

/**
 * Makes a move and returns the resulting board.
 * @param board The current board.
 * @param move The previous board.
 */
export function play(board: Board, move: Move): Board {
  const copy = blankBoard();
  for (let row = 0; row < 3; ++row) {
    for (let column = 0; column < 3; ++column) {
      copy[row][column] =
        move.row === row && move.column === column
          ? move.player
          : board[row][column];
    }
  }
  return copy;
}
