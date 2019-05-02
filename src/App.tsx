import React, { Component } from "react";
import styles from "./App.module.css";
import { checkWinner, play, blankBoard, Mark, Board, isFull } from "./board";
import emoji from "./emoji";
import BoardDisplay, { PlayHandler, MarkSymbolMapping } from "./BoardDisplay";
import Result from "./Result";

const emojiCharacters = Object.values(emoji);
const pick = () =>
  emojiCharacters[Math.floor(Math.random() * emojiCharacters.length)];
const chooseRandomMarks = () => {
  let X: string = "";
  let O: string = "";
  while (X === O) {
    X = pick();
    O = pick();
  }
  return { X, O };
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
