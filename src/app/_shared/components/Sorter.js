import styles from "../_shared.module.css"

export default function Sorter(props) {
  return (
    <div className={styles.divider}>
      <div className={styles.btnWrapper}>
        <div className={styles.arrows}>
          <div className={styles.arrow}>&#x2191;</div>
          <div className={styles.arrow}>&#x2191;</div>
        </div>
        <button
          className={
            props.listTypeTunnel === "favorites"
              ? `${styles.button} ${styles.buttonSelected}`
              : `${styles.button}`
          }
          onClick={props.changerFTunnel}
        >
          Favorites
        </button>
        <button
          className={
            props.listTypeTunnel === "year of release"
              ? `${styles.button} ${styles.buttonSelected}`
              : `${styles.button}`
          }
          onClick={props.changerYTunnel}
        >
          Year of release
        </button>
      </div>
    </div>
  );
}
