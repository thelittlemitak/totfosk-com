"use client";

import SingleWrapper from "./SingleWrapper";
import styles from "./singles.module.css";
import singlesImport from "../../data/singles";
import { useState, useEffect } from "react";
import Sorter from "../_shared/components/Sorter";
import sortByKey from "../_shared/functions/sortByKey";

export default function Singles() {
  const singlesV = singlesImport;
  console.log(singlesV);
  const [singlesState, setSinglesState] = useState([...singlesImport]);
  const [listType, setListType] = useState("favorites");
  const [wrapperStyleID, setWrapperStyleID] = useState(1);
  const [tagSelected, setTagSelected] = useState("");

  const changerYears = function () {
    setWrapperStyleID(2);
    setListType("year of release");

    const newArr = sortByKey(singlesState, "year");
    const newArr2 = [...newArr];
    setSinglesState(newArr2);
    setTagSelected("");

    setTimeout(() => setWrapperStyleID(1), 1400);
  };

  const changerFavorites = function () {
    setWrapperStyleID(2);
    setListType("favorites");

    const newArr3 = [...singlesV];
    setSinglesState(newArr3);
    setTagSelected("");

    setTimeout(() => setWrapperStyleID(1), 1400);
  };

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
          test={wrapperStyleID}
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
    <>
      <Sorter
        listTypeTunnel={listType}
        changerFTunnel={changerFavorites}
        changerYTunnel={changerYears}
      ></Sorter>
      <div className={styles.listWrapper}>
        {singles1_19}
        {singles20_39}
        {singles40_59}
        {singles60_79}
        {singles80_100}
      </div>
    </>
  );
}
