import "./Level3style.css";
import Image from "next/image";

function CoverArt(props) {
  const sourceID = props.imgIDTunnell2;
  const source = `/coverart/${sourceID}.webp`;
  
  return (
    <>
      <Image src={source} alt="this is a pic" className="cover-art" width={200} height={200}/>
    </>
  );
}

export default CoverArt;
