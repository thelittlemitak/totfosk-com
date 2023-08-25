import CoverArt from "./CoverArt";
import AlbumDescription from "./AlbumDescription";
import "./AlbumWrapper.css";
import Position from "./Position";

function AlbumWrapper(props) {
  const position = props.positionTunnel;

  return (
    <div className="album-wrapper">
      <Position positionTunnel={position}></Position>
      <CoverArt imgIDTunnell2={props.imgIDTunnel}></CoverArt>
      <AlbumDescription
        albumInfoTunnell2={props.albumInfoTunnel}
      ></AlbumDescription>
    </div>
  );
}

export default AlbumWrapper;
