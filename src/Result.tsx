import React from "react";
import { MaybeMark } from "./board";
import styles from "./Result.module.css";
import { MarkSymbolMapping } from "./BoardDisplay";

const Result = ({
  value,
  marks,
  onReset
}: {
  value: MaybeMark;
  marks: MarkSymbolMapping;
  onReset: () => void;
}) => (
  <div className={styles.result}>
    {value && <p>{marks[value]} wins! 🎉</p>}
    {!value && <p>It's a draw 😻</p>}
    <div>
      <button onClick={onReset}>Play again</button>
    </div>
  </div>
);

export default Result;
