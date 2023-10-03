"use client"

import styles from "../teaching.module.css";
import Image from "next/image";

const Card = function (props) {
  return (
    <div className={styles.instrumentCard}>
      <Image
        src={`/cardNOTPREPARED/${props.sourceID}.png`}
        alt="this is a picture of a musical instrument"
        width={props.widthTunnel}
        height={props.heightTunnel}
      ></Image>
      <div className={styles.title}>{props.titleTunnel}</div>
      <div className={styles.properties}>
        <div>{"·"}</div>
        <div className={styles.level}>{`${props.levelTunnel}`}</div>
        <div>{"·"}</div>
        <div className={styles.style}>{`${props.styleTunnel}`}</div>
        <div>{"·"}</div>
        <div className={styles.info}>{props.infoTunnel}</div>
      </div>
    </div>
  );
};

export default Card;
