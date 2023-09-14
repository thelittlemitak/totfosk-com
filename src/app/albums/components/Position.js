import styles from "../albums.module.css";
import { useEffect, useState } from "react";

function Ranking(props) {
  const [rankingType, setRankingType] = useState("#");

  return (
    <div className={styles.rankingCont}>
      <div className={styles.ranking}>
        {typeof props.positionTunnel === "number" ? rankingType : ""}
        {props.positionTunnel}
      </div>
    </div>
  );
}

export default Ranking;
