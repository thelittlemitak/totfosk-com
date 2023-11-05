"use client";

import { useState, useEffect } from "react";
import styles from "./app.module.css";

export default function HomePage() {

  //  ! EXERCICES FOR ME
  // const [data, setData] = useState([]);
  // const [loadingState, setLoadingState] = useState(false);

  // const getSomething = function () {
  //   setLoadingState(true);
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setLoadingState(false);
  //     })
  //     .catch((err) => alert(err));
  // };

  // const getSomething2 = async function () {
  //   setLoadingState(true);
  //   const importedData = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/"
  //   );
  //   const jasoned = await importedData.json();
  //   setData(jasoned);
  //   setLoadingState(false);
  // };

  // const apiPrinter = function () {
  //   getSomething();
  // };

  // useEffect(() => {
  //   getSomething2();
  // }, []);

  // console.log(data);

  // const arrayObj = [
  //   { userName: "Jose", year: 1992, key: 1 },
  //   { userName: "Fea", year: 1993, key: 2 },
  //   { userName: "Bea", year: 1994, key: 3 },
  //   { userName: "Elena", year: 1990, key: 4 },
  //   { userName: "Omi", year: 1995, key: 5 },
  // ];

  // const message = <div className={styles.loading}>Que paza</div>;

  // const numberOfItems = 10;

  return (
    <div className="disappeared">
      {/* {loadingState && message}
      <div>
        {data.slice(1, numberOfItems).map((x) => {
          return <div key={x.id}>{x.title}</div>;
        })}
      </div> */}
      <div className={styles.mainText}>
        If you want to follow me without the need of social media, you can
        easily put your email and city, and you will be notified only if I play
        near your or release new music.
      </div>
      <form className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          className={styles.ins}
          type="email"
          id="email"
          name="email"
          placeholder="email@mail.com"
          required
        />

        <label htmlFor="city">City:</label>
        <input
          className={styles.ins}
          type="text"
          id="city"
          name="city"
          placeholder="Menorca"
          required
        />

        <div className={styles.submitBtn}>Submit</div>
      </form>
      <div className={styles.secondaryText}>
        Also, if you subscribe, you will be getting my self-released music for
        free directly to your mailbox.
      </div>
    </div>
  );
}

{
  /* <iframe
  width="100%"
  height="400px"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/totfosk&amp;show_artwork=false&show_playcount=false&color=02f707"
></iframe>; */
}
