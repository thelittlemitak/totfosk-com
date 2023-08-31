"use client";

import AlbumWrapper from "./AlbumWrapper";
import styles from "./main-influences.module.css";
import albums from "../../data/albums";
import quotes from "../../data/quotes";
import { useState, useEffect } from "react";

export default function MainInfluencesPage() {
  const [btnStyle, setBtnStyle] = useState(styles.btn);
  const [btnCounter, setBtnCounter] = useState(0);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  let counter = 0;
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);

  const mapper = function (start, end) {
    return albums.slice(start, end).map((x) => {
      counter++;
      return (
        <AlbumWrapper
          imgIDTunnel={x.picID}
          positionTunnel={counter}
          albumInfoTunnel={x}
          key={x.picID}
        ></AlbumWrapper>
      );
    });
  };

  const albums1_9 = mapper(0, 9);
  const albums10_19 = mapper(9, 19);
  const albums20_29 = mapper(19, 29);
  const albums30_39 = mapper(29, 39);
  const albums40_50 = mapper(39, 51);

  const quote3 = <div className={styles.quotes}>{quotes[2]}</div>;
  const quote4 = <div className={styles.quotes}>{quotes[3]}</div>;
  const quote5 = <div className={styles.quotes}>{quotes[4]}</div>;

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2200) {
        setShowMore1(true);
      } else {
        setShowMore1(false);
      }
      if (window.scrollY > 5400) {
        setShowMore2(true);
      } else {
        setShowMore2(false);
      }
      if (window.scrollY > 8600) {
        setShowMore3(true);
      } else {
        setShowMore3(false);
      }
      if (window.scrollY > 11800) {
        setShowMore4(true);
      } else {
        setShowMore4(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.quotes}>{quotes[0]}</div>
      <div className={styles.pageWrapper}>{albums1_9}</div>
      <div className={styles.quotes}>{quotes[1]}</div>
      {showMore1 && albums10_19}
      {showMore1 && quote3}
      {showMore2 && albums20_29}
      {showMore2 && quote4}
      {showMore3 && albums30_39}
      {showMore3 && quote5}
      {showMore4 && albums40_50}
      
    </>
  );
}

{
  /* <div className={styles.pageWrapper}>{mapper(9, 19)}</div>
      <div className={styles.quotes}>{quotes[2]}</div>
      <div className={styles.pageWrapper}>{mapper(19, 29)}</div>
      <div className={styles.quotes}>{quotes[3]}</div>
      <div className={styles.pageWrapper}>{mapper(29, 39)}</div>
      <div className={styles.quotes}>{quotes[4]}</div>
      <div className={styles.pageWrapper}>{mapper(39, 51)}</div>
      <button
        className={btnStyle}
        onClick={() => {
          // setBtnStyle(styles.disappear);
          if (btnCounter === 0) {
            setShowMore1(!showMore1);
            setBtnCounter(1);
          } else if (btnCounter === 1) {
            setShowMore2(!showMore2);
            setBtnCounter(2);
          } else if (btnCounter === 2) {
            setShowMore3(!showMore3);
            setBtnCounter(3);
          } else if (btnCounter === 3) {
            setShowMore4(!showMore4);
            setBtnStyle(styles.disappear);
          }
        }}
      >
        Toggle
      </button>*/
}
