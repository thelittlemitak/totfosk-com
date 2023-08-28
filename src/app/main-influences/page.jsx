"use client";

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
        {albums.slice(0, 10).map((x) => {
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
        {albums.slice(11, 20).map((x) => {
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
        {albums.slice(21, 30).map((x) => {
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
      <div>Albums that will be added very soon are:</div>
      <ul>
        <li>Goreshit - My love fills all wrong</li>
        <li>Rod Modell - Captagon</li>
        <li>Sewervst - Draining Love Story</li>
        <li>Soichi Terada - Ape Scape</li>
        <li>Stevie Wonder ya tu sabe</li>
        <li>Yves Tumor</li>
        <li>Varg</li>
        <li>Carmen McRae</li>
        <li>Traffic</li>
        <li>FFX</li>
        <li>Birdman</li>
        <li>Yes</li>
        <li>A74</li>
        <li>Limbo</li>
        <li>Journey</li>
        <li>The Ronnettes</li>
        <li>Plastic Beach</li>
        <li>Autobahn</li>
        <li>Estopa</li>

        <li>Dire Straits</li>
        <li>Magical Mystery Tour</li>
      </ul>
    </>
  );
}
