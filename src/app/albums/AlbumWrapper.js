import CoverArt from "../_shared/components/CoverArt";
import AlbumDescription from "./components/AlbumDescription";
import styles from "./albums.module.css";
import Position from "../_shared/components/Position";
import { useEffect, useState } from "react";

function AlbumWrapper(props) {
  const position = props.positionTunnel;
  let style;
  const [style2, setStyle2] = useState("");

  if (props.test === 1) {
    style = styles.albumWrapper;
  } else if (props.test === 2) {
    style = `${styles.albumWrapper} ${styles.animation}`;
  }

  return (
    <div className={style}>
      <Position positionTunnel={props.listTypeTunnel === "favorites" ? position : props.albumInfoTunnel.year}></Position>
      <CoverArt imgIDTunnell2={props.imgIDTunnel} widthTunnel={250} heightTunnel={250} type={"albums"}></CoverArt>
      <AlbumDescription
        albumInfoTunnell2={props.albumInfoTunnel}
        key={props.albumInfoTunnel.picID}
        listTypeTunnel={props.listTypeTunnel}
        taggerTunnel={props.taggerTunnel}
        tagStyleTunnel={props.tagStyleTunnel}
        tagSelectedTunnel={props.tagSelectedTunnel}
      ></AlbumDescription>
    </div>
  );
}

export default AlbumWrapper;
