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
import BoardDisplay, { PlayHandler } from "./BoardDisplay";
import Result from "./Result";

interface AppState {
  board: Board;
  turn: Mark;
}

const nextTurn = (mark: Mark) => (mark === "X" ? "O" : "X");
const initialState: () => AppState = () => ({
  board: blankBoard(),
  turn: "X"
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
    const { board } = this.state;
    const done = isFull(board);
    return (
      <div className={styles.app}>
        {done && (
          <Result value={checkWinner(board)} onReset={this.handleReset} />
        )}
        {!done && <BoardDisplay value={board} onPlay={this.handlePlay} />}
      </div>
    );
  }
}

export default App;
