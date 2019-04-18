import React from "react";
import { BoardLine, Board } from "./board";
import styles from "./BoardDisplay.module.css";

export type PlayHandler = (row: number, column: number) => void;

const BoardDisplayRow = ({
  value,
  rowNumber,
  onClick
}: {
  value: BoardLine;
  rowNumber: number;
  onClick: PlayHandler;
}) => (
  <tr>
    {value.map((square, columnNumber) => (
      <td key={columnNumber}>
        <button
          className={styles.square}
          onClick={() => onClick(rowNumber, columnNumber)}
          disabled={!!square}
        >
          {square}
        </button>
      </td>
    ))}
  </tr>
);

const BoardDisplay = ({
  value,
  onPlay
}: {
  value: Board;
  onPlay: PlayHandler;
}) => {
  return (
    <table className={styles.board}>
      <tbody>
        {value.map((row, rowNumber) => (
          <BoardDisplayRow
            key={rowNumber}
            value={row}
            rowNumber={rowNumber}
            onClick={onPlay}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BoardDisplay;
