"use client";

import styles from "./teaching.module.css";
import Card from "./components/Card";
import { useState } from "react";
import Btn from "./components/Btn";

const Teaching = function () {
  const [array1, setArray1] = useState([]);

  const instSelector = function (tag) {
    let array2 = [...array1, tag];
    setArray1(array2);
    console.log(array2);
  };

  return (
    <>
      <div className={styles.mainText}>
        I would gladly help you with your journey! This are the topics I am
        currently available for teaching, both in Berlin or online:
      </div>
      <div className={styles.instrumentsWrapper}>
        <Card
          titleTunnel="Drums"
          levelTunnel="All levels"
          styleTunnel="All styles."
          widthTunnel={300}
          heightTunnel={300}
          sourceID={11}
          infoTunnel="Technique, tempo awareness, language, transcriptions, sight reading, independence. Only one bass drum."
        ></Card>
        <Card
          titleTunnel="Piano"
          levelTunnel="Beginner/medium level"
          styleTunnel="Classical"
          widthTunnel={300}
          heightTunnel={300}
          sourceID={22}
          infoTunnel="Reading music sheets, technique, theory, harmony, analisys of a piece."
        ></Card>
        <Card
          titleTunnel="Ableton/Logic"
          levelTunnel="All levels"
          styleTunnel="All styles"
          widthTunnel={300}
          heightTunnel={300}
          sourceID={33}
          infoTunnel="All functionality, track analysis (how to create any sound), workflow, midi, live performance, DJing."
        ></Card>
        {/* <Card
          titleTunnel="Logic"
          levelTunnel="All levels"
          styleTunnel="All styles"
          widthTunnel={300}
          heightTunnel={300}
          sourceID={33}
          infoTunnel="All functions, track analysis (how to create any sound), workflow. How to create every sound that you hear."
        ></Card>
        <Card
          titleTunnel="Audio"
          levelTunnel="All levels"
          styleTunnel="All styles"
          widthTunnel={300}
          heightTunnel={300}
          sourceID={33}
          infoTunnel="All types of synthesis, how audio interacts with the world, studio setup, live setup, recording."
        ></Card> */}
      </div>
      <div className={styles.mainText}>
        I have two studios in Berlin, both available for Logic/Ableton. For
        piano and drums, choose the one that better fits your choice(s):
      </div>
      <div className={styles.studiosWrapper}>
        <Card
          titleTunnel="Studio 1"
          levelTunnel="Allee der Kosmonauten, 12681 Berlin"
          styleTunnel="Accoustic drums."
          widthTunnel={500}
          heightTunnel={500}
          sourceID={11}
          infoTunnel="49 keys keyboard."
        ></Card>
        <Card
          titleTunnel="Studio 2"
          levelTunnel="KreutzigerstraBe, 10247 Berlin"
          styleTunnel="Electronic drums."
          widthTunnel={500}
          heightTunnel={500}
          sourceID={22}
          infoTunnel="88 hammered keys keyboard."
        ></Card>
      </div>
      <div className={styles.mainText}>
        For online courses, I can only use Studio 2.
      </div>
      <div className={styles.mainBtnsWrapper}>
        <div className={styles.btnFlex}>
          <Btn nameTunnel="Drums" instSelectorT={instSelector}></Btn>
          <Btn nameTunnel="Piano" instSelectorT={instSelector}></Btn>
          <Btn nameTunnel="Ableton" instSelectorT={instSelector}></Btn>
          <Btn nameTunnel="Logic" instSelectorT={instSelector}></Btn>
        </div>
        <div className={styles.btnFlex}>
          <button>Studio 1</button>
          <button>Studio 2</button>
        </div>
        <div className={styles.btnFlex}>
          <button>1 hour</button>
          <button>1,5 hours</button>
          <button>2 hours</button>
          <button>2,5 hours</button>
        </div>
      </div>
      <button>Submit</button>

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

        <input type="submit" value="Submit" className={styles.submitBtn} />
      </form>
      <div className={styles.secondaryText}>
        Also, if you subscribe, you will be getting my self-released music for
        free directly to your mailbox.
      </div>
    </>
  );
};

export default Teaching;
