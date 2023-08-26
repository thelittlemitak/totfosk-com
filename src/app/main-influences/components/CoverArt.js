import Image from "next/image";
import styles from "../main-influences.module.css"

function CoverArt(props) {
  const sourceID = props.imgIDTunnell2;
  const source = `/coverart/${sourceID}.webp`;
  
  return (
    <>
      <Image src={source} alt="this is a pic" className={styles.coverArt} width={200} height={200}/>
    </>
  );
}

export default CoverArt;
