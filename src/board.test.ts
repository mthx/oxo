import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { isFull, checkWinner } from "./board";

describe("isFull", () => {
  it("identifies full board", () => {
    expect(isFull([["X", "X", "X"], ["X", "X", "X"], ["X", "X", "X"]])).toEqual(
      true
    );
  });
  it("identifies not full board", () => {
    expect(
      isFull([["X", "X", "X"], ["X", undefined, "X"], ["X", "X", "X"]])
    ).toEqual(false);
  });
});

describe("checkWinner", () => {
  it("finds winner row", () => {
    expect(
      checkWinner([
        ["X", "X", "X"],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ])
    ).toEqual("X");
  });
  it("finds winner column", () => {
    expect(
      checkWinner([
        [undefined, "O", undefined],
        [undefined, "O", undefined],
        [undefined, "O", undefined]
      ])
    ).toEqual("O");
  });
  it("finds diagonals", () => {
    expect(
      checkWinner([
        ["X", undefined, undefined],
        [undefined, "X", undefined],
        [undefined, undefined, "X"]
      ])
    ).toEqual("X");
    expect(
      checkWinner([
        [undefined, undefined, "O"],
        [undefined, "O", undefined],
        ["O", undefined, undefined]
      ])
    ).toEqual("O");
  });
  it("is undefined for a draw", () => {
    expect(checkWinner([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]))
      .toBeUndefined;
  });
});
