"use client";

import styles from "./singles.module.css";
import { useState } from "react";

export default function SingleWrapper(props) {
  let style;

  if (props.test === 1) {
    style = styles.singleWrapper;
  } else if (props.test === 2) {
    style = `${styles.singleWrapper} ${styles.animation}`;
  }

  const [explanationStlye, setExplanationStyle] = useState(
    `${styles.explanation}`
  );

  const expander = function (e) {
    if (explanationStlye === styles.explanation) {
      setExplanationStyle(`${styles.explanation} ${styles.visible}`);
    } else {
      setExplanationStyle(`${styles.explanation}`);

    }
  
  };

  return (
    <>
      <div className={style}>
        <div className={styles.textFlex}>
          <div className={styles.positionTitle}>
            {`${props.counterTunnel} ${props.trackTunnel}`}
          </div>
          <div className={styles.artistAlbum}>
            {`by ${props.artistTunnel} (${props.albumTunnel})`}
          </div>
        </div>
        <div>{props.yearTunnel}</div>
        <button className={styles.bonusBtn} onClick={expander}>
          BUTTON
        </button>
      </div>
      <div className={explanationStlye}>{props.explanationTunnel}</div>
    </>
  );
}
