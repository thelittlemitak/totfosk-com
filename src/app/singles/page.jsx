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

  const singles1_9 = mapper(0, 9);
  const singles10_19 = mapper(9, 19);
  const singles20_29 = mapper(19, 29);
  const singles30_39 = mapper(29, 39);
  const singles40_50 = mapper(39, 51);

  return (
    <div className={styles.listWrapper}>
      {singles1_9}
      {singles10_19}
      {singles20_29}
      {singles30_39}
      {singles40_50}
    </div>
  );
}
