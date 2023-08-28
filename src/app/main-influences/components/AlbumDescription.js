import styles from "../main-influences.module.css";

function AlbumDescription(props) {
  let counter = 0;

  return (
    <div className={styles.albumInfoWrapper}>
      <div
        className={styles.albumTitle}
      >{`${props.albumInfoTunnell2.album}`}</div>
      <div className={styles.albumInfoDescription}>
        {props.albumInfoTunnell2.decription}
      </div>
      <div
        className={styles.artistName}
      >{`by ${props.albumInfoTunnell2.artist}`}</div>
      <div
        className={styles.labelInfo}
      >{`${props.albumInfoTunnell2.year}, ${props.albumInfoTunnell2.label}`}</div>
      <div className={styles.tagsWrapper}>
        {props.albumInfoTunnell2.genre.map((x) => {
          counter++;
          return (
            <div
              className={styles.genre}
              key={props.albumInfoTunnell2.picID + counter}
            >
              {x}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AlbumDescription;
