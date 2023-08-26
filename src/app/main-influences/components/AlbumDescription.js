import styles from "../main-influences.module.css";

function AlbumDescription(props) {
  return (
    <div className={styles.albumInformation}>
      <div className={styles.nameAndLabelWrapper}>
        <div>{`${props.albumInfoTunnell2.artist} - ${props.albumInfoTunnell2.album}`}</div>
        <div
          className={styles.labelInfo}
        >{`${props.albumInfoTunnell2.year}, ${props.albumInfoTunnell2.label}`}</div>
      </div>
      <div className={styles.albumInfoDescription}>
        {props.albumInfoTunnell2.decription}
      </div>
    </div>
  );
}

export default AlbumDescription;
