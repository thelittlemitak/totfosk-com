"use client";

import SingleWrapper from "./SingleWrapper";
import styles from "./singles.module.css";
import singlesImport from "../../data/singles";
import { useState, useEffect } from "react";

export default function Singles() {
  const [singlesState, setSinglesState] = useState(singlesImport);

  let counter = 0;

  const mapper = function (start, end) {
    return singlesState.slice(start, end).map((x) => {
      counter++;
      return (
        <SingleWrapper
          counterTunnel={counter}
          trackTunnel={x.track}
          albumTunnel={x.album}
          artistTunnel={x.artist}
          yearTunnel={x.year}
          explanationTunnel={x.explanation}
          key={x.key}
        ></SingleWrapper>
      );
    });
  };

  const singles1_19 = mapper(0, 19);
  const singles20_39 = mapper(19, 39);
  const singles40_59 = mapper(39, 59);
  const singles60_79 = mapper(59, 79);
  const singles80_100 = mapper(79, 100);



  return (
    <div className={styles.listWrapper}>
      {singles1_19}
      {singles20_39}
      {singles40_59}
      {singles60_79}
      {singles80_100}
    </div>
  );
}
