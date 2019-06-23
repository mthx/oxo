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
    const winner = checkWinner([
      ["X", "X", "X"],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined]
    ])!;
    expect(winner.mark).toEqual("X");
    expect(winner.isWinningCell(0, 0)).toBeTruthy();
    expect(winner.isWinningCell(0, 1)).toBeTruthy();
    expect(winner.isWinningCell(0, 2)).toBeTruthy();
    expect(winner.isWinningCell(1, 0)).toBeFalsy();
  });
  it("finds winner column", () => {
    const winner = checkWinner([
      [undefined, "O", undefined],
      [undefined, "O", undefined],
      [undefined, "O", undefined]
    ])!;
    expect(winner.mark).toEqual("O");
    expect(winner.isWinningCell(0, 1)).toBeTruthy();
    expect(winner.isWinningCell(1, 1)).toBeTruthy();
    expect(winner.isWinningCell(2, 1)).toBeTruthy();
    expect(winner.isWinningCell(2, 2)).toBeFalsy();
  });
  it("finds diagonals", () => {
    const d1 = checkWinner([
      ["X", undefined, undefined],
      [undefined, "X", undefined],
      [undefined, undefined, "X"]
    ])!;
    expect(d1.mark).toEqual("X");
    expect(d1.isWinningCell(0, 0)).toBeTruthy();
    expect(d1.isWinningCell(1, 1)).toBeTruthy();
    expect(d1.isWinningCell(2, 2)).toBeTruthy();


    const d2 = checkWinner([
      [undefined, undefined, "O"],
      [undefined, "O", undefined],
      ["O", undefined, undefined]
    ])!;
    expect(d2.mark).toEqual("O");
    expect(d2.isWinningCell(0, 2)).toBeTruthy();
    expect(d2.isWinningCell(1, 1)).toBeTruthy();
    expect(d2.isWinningCell(2, 0)).toBeTruthy();
  });
  it("is undefined for a draw", () => {
    expect(checkWinner([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]))
      .toBeUndefined;
  });
});
