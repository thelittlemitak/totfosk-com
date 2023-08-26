import styles from "../main-influences.module.css";

function Ranking(props) {
  return <div className={styles.ranking}>#{props.positionTunnel}</div>;
}

export default Ranking;
