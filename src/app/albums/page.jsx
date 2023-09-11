"use client";

import AlbumWrapper from "./AlbumWrapper";
import styles from "./influences.module.css";
import albumsImport from "../../data/albums";
import quotes from "../../data/quotes";
import { useState, useEffect } from "react";

export default function Albums() {
  const albumsV = albumsImport;

  const [btnStyle, setBtnStyle] = useState(styles.btn);
  const [btnCounter, setBtnCounter] = useState(0);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [albumsState, setAlbumsState] = useState([...albumsV]);
  const [listType, setListType] = useState("favorites");
  const [tagStyle, setTagStyle] = useState(styles.genre);
  const [tagSelected, setTagSelected] = useState("");

  const [wrapperStyleID, setWrapperStyleID] = useState(1);

  const tagger = function (e) {
    const test = e.target.innerHTML;
    setTagSelected(test);
    const taggedArray = albumsState.filter((albumObj) =>
      albumObj.genre.includes(test)
    );

    // console.log(albumsState);
    // console.log(taggedArray);
    console.log(tagSelected);
    setAlbumsState(taggedArray);
    setWrapperStyleID(2);
    setTimeout(() => setWrapperStyleID(1), 1400);
  };

  useEffect(() => {
    console.log(`this is ${tagSelected} from the use Effect`);
    console.log(tagSelected);
  }, [tagSelected]);

  function sortByKey(arr, key) {
    arr.sort((a, b) => a[key] - b[key]);
    return arr;
  }

  const changerYears = function () {
    setWrapperStyleID(2);
    setListType("year of release");

    const newArr = sortByKey(albumsState, "year");
    const newArr2 = [...newArr];
    setAlbumsState(newArr2);
    setTagSelected("");

    setTimeout(() => setWrapperStyleID(1), 1400);
  };

  const changerFavorites = function () {
    setWrapperStyleID(2);
    setListType("favorites");

    const newArr3 = [...albumsV];
    setAlbumsState(newArr3);
    setTagSelected("");

    setTimeout(() => setWrapperStyleID(1), 1400);
  };

  useEffect(() => console.log("I am rerendering"), [albumsState]);

  let counter = 0;

  const mapper = function (start, end) {
    return albumsState.slice(start, end).map((x) => {
      counter++;
      return (
        <AlbumWrapper
          test={wrapperStyleID}
          imgIDTunnel={x.picID}
          positionTunnel={counter}
          albumInfoTunnel={x}
          key={x.picID}
          listTypeTunnel={listType}
          taggerTunnel={tagger}
          tagStyleTunnel={tagStyle}
          tagSelectedTunnel={tagSelected}
        ></AlbumWrapper>
      );
    });
  };

  const albums1_9 = mapper(0, 9);
  const albums10_19 = mapper(9, 19);
  const albums20_29 = mapper(19, 29);
  const albums30_39 = mapper(29, 39);
  const albums40_50 = mapper(39, 51);

  // const [albums1_9, setAlbums1_9] = useState(mapper(0, 9));
  // const [albums10_19, setAlbums10_19] = useState(mapper(9, 19));
  // const [albums20_29, setAlbums20_29] = useState(mapper(19, 29));
  // const [albums30_39, setAlbums30_39] = useState(mapper(29, 39));
  // const [albums40_50, setAlbums40_50] = useState(mapper(39, 51));

  const genericQuote = <div className={styles.quotes}>{quotes[2]}</div>;

  const quotePrinter = function (a) {
    return <div className={styles.quotes}>{quotes[a]}</div>;
  };

  const quote2 = quotePrinter(1);
  const quote3 = quotePrinter(2);
  const quote4 = quotePrinter(3);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2200) {
        setShowMore1(true);
      }
      if (window.scrollY > 5400) {
        setShowMore2(true);
      }
      if (window.scrollY > 8600) {
        setShowMore3(true);
      }
      if (window.scrollY > 11800) {
        setShowMore4(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.quotes}>
        A list of the most influential albums of my life.
      </div>
      <div className={styles.divider}>
        <div className={styles.btnWrapper}>
          <div className={styles.arrows}>
            <div className={styles.arrow}>&#x2191;</div>
            <div className={styles.arrow}>&#x2191;</div>
          </div>
          <button
            className={
              listType === "favorites"
                ? `${styles.button} ${styles.buttonSelected}`
                : `${styles.button}`
            }
            onClick={changerFavorites}
          >
            Favorites
          </button>
          <button
            className={
              listType === "year of release"
                ? `${styles.button} ${styles.buttonSelected}`
                : `${styles.button}`
            }
            onClick={changerYears}
          >
            Year of release
          </button>
        </div>
      </div>
      <div className={styles.pageWrapper}>{albums1_9}</div>
      <div className={styles.quotes}>{quotes[0]}</div>
      {showMore1 && albums10_19}
      {showMore1 && quote2}
      {showMore2 && albums20_29}
      {showMore2 && quote3}
      {showMore3 && albums30_39}
      {showMore3 && quote4}
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

// useEffect(() => {
//   const handleScroll = () => {
//     console.log("Scroll position:", window.scrollY);
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     // Clean up the event listener when the component unmounts
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);
// let scrollPosition = window.scrollY; * THIS FIVES AN ERROR BECAUSE WINDOW IS NOT DEFINED ON THE SERVER
// console.log(scrollPosition);

// else {
//   setShowMore1(false);
// }
