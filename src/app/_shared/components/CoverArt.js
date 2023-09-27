import Image from "next/image";
import styles from "../_shared.module.css";

function CoverArt(props) {
  const sourceID = props.imgIDTunnell2;
  const type = props.type;
  const source = `/${type}/${sourceID}.webp`;

  return (
    <>
      <Image
        src={source}
        alt="this is a squared front page coverart of a music album"
        className={styles.coverArt}
        width={props.widthTunnel}
        height={props.heightTunnel}
      />
    </>
  );
}

export default CoverArt;
