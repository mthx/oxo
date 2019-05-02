import React, { Component } from "react";
import styles from "./App.module.css";
import {
  checkWinner,
  play,
  blankBoard,
  MaybeMark,
  Mark,
  Board,
  isFull
} from "./board";
import emoji from "./emoji";
import BoardDisplay, { PlayHandler, MarkSymbolMapping } from "./BoardDisplay";
import Result from "./Result";

const chooseRandomMarks = () => {
  const characters = Object.values(emoji);
  let x: number = 0;
  let o: number = 0;
  while (x === o) {
    x = Math.floor(Math.random() * characters.length);
    o = Math.floor(Math.random() * characters.length);
  }
  return { X: characters[x], O: characters[o] };
};

interface AppState {
  board: Board;
  turn: Mark;
  marks: MarkSymbolMapping;
}

const nextTurn = (mark: Mark) => (mark === "X" ? "O" : "X");
const initialState: () => AppState = () => ({
  board: blankBoard(),
  turn: "X",
  marks: chooseRandomMarks()
});

class App extends Component<{}, AppState> {
  state: AppState = initialState();

  handleReset = () => this.setState(initialState());

  handlePlay: PlayHandler = (row, column) => {
    this.setState(currentState => {
      const board = play(currentState.board, {
        row,
        column,
        player: currentState.turn
      });
      const turn = nextTurn(currentState.turn);
      return {
        turn,
        board
      };
    });
  };
  render() {
    const { board, marks } = this.state;
    const winner = checkWinner(board);
    const done = isFull(board) || winner;
    return (
      <div className={styles.app}>
        {done && (
          <Result marks={marks} value={winner} onReset={this.handleReset} />
        )}
        {!done && (
          <BoardDisplay value={board} onPlay={this.handlePlay} marks={marks} />
        )}
      </div>
    );
  }
}

export default App;
