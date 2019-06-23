import React from "react";
import { BoardLine, Board, MaybeMark, Winner } from "./board";
import styles from "./BoardDisplay.module.css";
import classNames from "classnames";

export type PlayHandler = (row: number, column: number) => void;
export type MarkSymbolMapping = { [key: string]: string };

const BoardDisplay = ({
  value,
  onPlay,
  marks,
  winner,
  done,
}: {
  value: Board;
  onPlay: PlayHandler;
  marks: MarkSymbolMapping;
  winner: Winner | undefined;
  done: boolean;
}) => {
  const BoardDisplayRow = ({
    value,
    rowNumber
  }: {
    value: BoardLine;
    rowNumber: number;
  }) => (
    <tr>
      {value.map((square, columnNumber) => (
        <td key={columnNumber}>
          <button
            className={classNames(styles.square, {
              [styles.winningSquare]:
                winner && winner.isWinningCell(rowNumber, columnNumber)
            })}
            onClick={() => onPlay(rowNumber, columnNumber)}
            onTouchEnd={() => onPlay(rowNumber, columnNumber)}
            disabled={!!square || done}
          >
            {square && marks[square]}
          </button>
        </td>
      ))}
    </tr>
  );

  return (
    <table className={styles.board}>
      <tbody>
        {value.map((row, rowNumber) => (
          <BoardDisplayRow key={rowNumber} value={row} rowNumber={rowNumber} />
        ))}
      </tbody>
    </table>
  );
};

export default BoardDisplay;
