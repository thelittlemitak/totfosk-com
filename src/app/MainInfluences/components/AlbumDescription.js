import "./Level3style.css";

function AlbumDescription(props) {
  return (
    <div className="album-information">
      <div className="name-and-label-wrapper">
        <div>{`${props.albumInfoTunnell2.artist} - ${props.albumInfoTunnell2.album}`}</div>
        <div className="label-info">{`${props.albumInfoTunnell2.year}, ${props.albumInfoTunnell2.label}`}</div>
      </div>
      <div className="album-info-description">
        {props.albumInfoTunnell2.decription}
      </div>
    </div>
  );
}

export default AlbumDescription;
