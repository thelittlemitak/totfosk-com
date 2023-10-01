import Image from "next/image";
import styles from "./electronic.module.css";

const ElectronicWrapper = function (props) {
  const sourceID = props.fullObj.picture;
  const source = `/electronic/${sourceID}.webp`;

  return (
    <div className={styles.electroWrapper}>
      <Image
        src={source}
        alt="this is a pic"
        className={styles.coverArt}
        width={400}
        height={400}
      ></Image>
      <div className={styles.title}>{props.fullObj.track}</div>
      <div className={styles.artist}>{`${props.fullObj.artist}`}</div>
      <div
        className={styles.album}
      >{`${props.fullObj.album} (${props.fullObj.year})`}</div>
      <div className={styles.descrition}>
        {props.fullObj.explanation}
      </div>
    </div>
  );
};

export default ElectronicWrapper;
