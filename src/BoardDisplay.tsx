import React from "react";
import { BoardLine, Board, MaybeMark } from "./board";
import styles from "./BoardDisplay.module.css";

export type PlayHandler = (row: number, column: number) => void;
export type MarkSymbolMapping = { [key: string]: string };

const BoardDisplayRow = ({
  value,
  rowNumber,
  onClick,
  marks
}: {
  value: BoardLine;
  rowNumber: number;
  onClick: PlayHandler;
  marks: MarkSymbolMapping;
}) => (
  <tr>
    {value.map((square, columnNumber) => (
      <td key={columnNumber}>
        <button
          className={styles.square}
          onClick={() => onClick(rowNumber, columnNumber)}
          disabled={!!square}
        >
          {square && marks[square]}
        </button>
      </td>
    ))}
  </tr>
);

const BoardDisplay = ({
  value,
  onPlay,
  marks
}: {
  value: Board;
  onPlay: PlayHandler;
  marks: MarkSymbolMapping;
}) => {
  return (
    <table className={styles.board}>
      <tbody>
        {value.map((row, rowNumber) => (
          <BoardDisplayRow
            marks={marks}
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
