"use client";

import styles from "./singles.module.css";
import { useState } from "react";
import Position from "../_shared/components/Position";
import Image from "next/image";
import CoverArt from "../_shared/components/CoverArt";

export default function SingleWrapper(props) {
  const [arrow, setArrow] = useState("↓");
  const [arrowStyle, setArrowStyle] = useState(styles.arrowDown);
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
    if (arrowStyle === styles.arrowDown) {
      setArrowStyle(`${styles.arrowDown} ${styles.arrowDisappearance}`);
    } else {
      setArrowStyle(`${styles.arrowDown}`);
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
          <CoverArt
            imgIDTunnell2={props.picIDTunnel}
            widthTunnel={150}
            heightTunnel={150}
            type={"singles"}
          ></CoverArt>
          <div className={styles.container}>
            <div className={styles.title}>{`${props.trackTunnel}`}</div>
            <div className={styles.artistAlbum}>
              {`by ${props.artistTunnel} (${props.albumTunnel})`}
            </div>
          </div>
          <div className={styles.year}>{props.yearTunnel}</div>
          <button className={styles.bonusBtn} onClick={expander}>
            <div>Know more</div>
            <div className={arrowStyle}>{arrow}</div>
          </button>
        </div>
      </div>
      <div className={explanationStlye}>{props.explanationTunnel}</div>
    </>
  );
}
