import CoverArt from "./components/CoverArt";
import AlbumDescription from "./components/AlbumDescription";
import styles from "./main-influences.module.css";
import Position from "./components/Position";

function AlbumWrapper(props) {
  const position = props.positionTunnel;

  return (
    <div className={styles.albumWrapper}>
      <Position positionTunnel={position}></Position>
      <CoverArt imgIDTunnell2={props.imgIDTunnel}></CoverArt>
      <AlbumDescription
        albumInfoTunnell2={props.albumInfoTunnel}
        key={props.albumInfoTunnel.picID}
      ></AlbumDescription>
    </div>
  );
}

export default AlbumWrapper;
