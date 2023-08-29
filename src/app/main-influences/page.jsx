import AlbumWrapper from "./AlbumWrapper";
import styles from "./main-influences.module.css";
import albums from "../../data/albums";
import quotes from "../../data/quotes";

export default function MainInfluencesPage() {
  let counter = 0;

  return (
    <>
      <div className={styles.intro}>{quotes[0]}</div>
      <div className={styles.pageWrapper}>
        {albums.slice(0, 9).map((x) => {
          counter++;
          return (
            <AlbumWrapper
              imgIDTunnel={x.picID}
              positionTunnel={counter}
              albumInfoTunnel={x}
              key={x.picID}
            ></AlbumWrapper>
          );
        })}
      </div>
      <div className={styles.intro}>{quotes[1]}</div>
      <div className={styles.pageWrapper}>
        {albums.slice(10, 21).map((x) => {
          counter++;
          return (
            <AlbumWrapper
              imgIDTunnel={x.picID}
              positionTunnel={counter}
              albumInfoTunnel={x}
              key={x.picID}
            ></AlbumWrapper>
          );
        })}
      </div>
      <div className={styles.intro}>{quotes[2]}</div>
      <div className={styles.pageWrapper}>
        {albums.slice(21, 31).map((x) => {
          counter++;
          return (
            <AlbumWrapper
              imgIDTunnel={x.picID}
              positionTunnel={counter}
              albumInfoTunnel={x}
              key={x.picID}
            ></AlbumWrapper>
          );
        })}
      </div>
      <div className={styles.intro}>{quotes[3]}</div>
      <div className={styles.pageWrapper}>
        {albums.slice(31, 41).map((x) => {
          counter++;
          return (
            <AlbumWrapper
              imgIDTunnel={x.picID}
              positionTunnel={counter}
              albumInfoTunnel={x}
              key={x.picID}
            ></AlbumWrapper>
          );
        })}
      </div>
      <div className={styles.intro}>
        {quotes[4]}
      </div>
      <div className={styles.pageWrapper}>
        {albums.slice(41, 51).map((x) => {
          counter++;
          return (
            <AlbumWrapper
              imgIDTunnel={x.picID}
              positionTunnel={counter}
              albumInfoTunnel={x}
              key={x.picID}
            ></AlbumWrapper>
          );
        })}
      </div>
      <div>Albums that will be added very soon are:</div>
      <ul>
        <li>Sewervst - Draining Love Story</li>
        <li>Traffic</li>
        <li>Yes</li>
        <li>Follow the leader?</li>
        <li>The Ronnettes</li>

        <li>Dire Straits</li>
        <li>Magical Mystery Tour</li>
      </ul>
    </>
  );
}
