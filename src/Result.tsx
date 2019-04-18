import React from "react";
import { MaybeMark } from "./board";
import styles from "./Result.module.css";

const Result = ({
  value,
  onReset
}: {
  value: MaybeMark;
  onReset: () => void;
}) => (
  <div className={styles.result}>
    {value && <p>{value} wins! 🎉</p>}
    {!value && <p>It's a draw 😻</p>}
    <div>
      <button onClick={onReset}>Play again</button>
    </div>
  </div>
);

export default Result;
