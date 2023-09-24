import styles from "./electronic.module.css";

const ElectronicWrapper = function (props) {
  return (
    <div className={styles.electroWrapper}>
      <div className={styles.title}>{props.fullObj.track}</div>
      <div className={styles.album}>{props.fullObj.album}</div>
      <div
        className={styles.artist}
      >{`${props.fullObj.artist} (${props.fullObj.year})`}</div>
      <div>
        This is a text in which I explain shit. This is a text in which I
        explain shit. This is a text in which I explain shit.{" "}
      </div>
    </div>
  );
};

export default ElectronicWrapper;
