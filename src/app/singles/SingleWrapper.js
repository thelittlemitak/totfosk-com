"use client";

import styles from "./singles.module.css";
import { useState } from "react";
import Position from "../_shared/components/Position";

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
      {/* the style ver that appears here below is the singleWrapper class */}
      <div className={style}>
        <div className={styles.textFlex}>
          <Position
            positionTunnel={
              props.listTypeTunnel === "favorites"
                ? props.positionTunnel
                : props.yearTunnel
            }
          ></Position>
          <div className={styles.positionTitle}>{`${props.trackTunnel}`}</div>
          <div className={styles.artistAlbum}>
            {`by ${props.artistTunnel} (${props.albumTunnel})`}
          </div>
          <div className={styles.artistAlbum}>{props.yearTunnel}</div>
          <button className={styles.bonusBtn} onClick={expander}>
            Learn more
          </button>
        </div>
      </div>
      <div className={explanationStlye}>{props.explanationTunnel}</div>
    </>
  );
}
