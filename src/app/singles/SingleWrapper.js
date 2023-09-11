import styles from "./singles.module.css";

export default function SingleWrapper(props) {
  return (
    <div className={styles.singleWrapper}>
      <div>{`${props.counterTunnel} - ${props.trackTunnel} by ${props.artistTunnel} (${props.albumTunnel})`}</div>
      <div>{props.yearTunnel}</div>
      <div className={styles.explanation}>{props.explanationTunnel}</div>
    </div>
  );
}
