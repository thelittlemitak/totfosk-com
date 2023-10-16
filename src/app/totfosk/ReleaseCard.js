import styles from "./styles.module.css"

const ReleaseCard = function (props) {
  return (
    <div className={styles.releaseContainer}>
      <div>{props.albumTunnel.album}</div>
      <div>
        {props.albumTunnel.tracks.map((x) => {
          return (
            <div key={x.key} className={styles.titleContainer}>
              <div>{x.title}</div>
              <div>{x.duration}</div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReleaseCard;
