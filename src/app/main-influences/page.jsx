import AlbumWrapper from "./AlbumWrapper";
import styles from "./main-influences.module.css";
import albums from "../../data/albums";

export default function MainInfluencesPage() {
  let counter = 0;

  return (
    <>
      <div className={styles.intro}>
        &quot;There are some albums that change everything. You just hear them
        in a constant loop for weeks, sometimes months, without hearing anything
        else.&quot;
      </div>
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
      <div className={styles.intro}>
        &quot;I listen to them before going to sleep, with my eyes closed, the
        style doesn&apos;t matter. Anything good takes my full attention.&quot;
      </div>
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
      <div className={styles.intro}>
        &quot;Your hearing develops with time, and you get deeper into more
        complex styles (and together with it, deeper emotions).
        <p>There&apos;s no way back.&quot;</p>
      </div>
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
      <div className={styles.intro}>
        Albums are not ranked here as better or worst, but regarding how much
        time I spent with them or rather how much they affected me. And this
        depends a lot on which time they were discovered.
      </div>
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        fuga ullam beatae accusamus corporis voluptatibus pariatur illo.
        Mollitia incidunt enim quod laboriosam doloremque minus, modi nihil
        atque aperiam omnis accusamus.
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
