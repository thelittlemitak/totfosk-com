import styles from "./singles.module.css";

export default function SingleWrapper(props) {
  let style;

  if (props.test === 1) {
    style = styles.singleWrapper;
  } else if (props.test === 2) {
    style = `${styles.singleWrapper} ${styles.animation}`;
  }

  return (
    <div className={style}>
      <div className={styles.textFlex}>
        <div className={styles.positionTitle}>
          {`${props.counterTunnel} - ${props.trackTunnel}`}
        </div>
        <div className={styles.artistAlbum}>
          {`by ${props.artistTunnel} (${props.albumTunnel})`}
        </div>
      </div>
      <div>{props.yearTunnel}</div>
      <div className={styles.explanation}>{props.explanationTunnel}</div>
      <div className={styles.filler}></div>
    </div>
  );
}
