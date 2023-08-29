import AlbumWrapper from "./AlbumWrapper";
import styles from "./main-influences.module.css";
import albums from "../../data/albums";
import quotes from "../../data/quotes";

export default function MainInfluencesPage() {
  let counter = 0;

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

  return (
    <>
      <div className={styles.intro}>{quotes[0]}</div>
      <div className={styles.pageWrapper}>{mapper(0, 9)}</div>
      <div className={styles.intro}>{quotes[1]}</div>
      <div className={styles.pageWrapper}>{mapper(10, 21)}</div>
      <div className={styles.intro}>{quotes[2]}</div>
      <div className={styles.pageWrapper}>{mapper(21, 31)}</div>
      <div className={styles.intro}>{quotes[3]}</div>
      <div className={styles.pageWrapper}>{mapper(31, 41)}</div>
      <div className={styles.intro}>{quotes[4]}</div>
      <div className={styles.pageWrapper}>{mapper(41, 51)}</div>
      <div>Albums that will be added very soon are:</div>
      <ul>
        <li>Sewervst - Draining Love Story</li>
        <li>Traffic</li>
        <li>Follow the leader?</li>
        <li>The Ronnettes</li>
        <li>Dire Straits</li>
        <li>Magical Mystery Tour</li>
      </ul>
    </>
  );
}
