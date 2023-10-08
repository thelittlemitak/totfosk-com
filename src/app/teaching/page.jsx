"use client";

import styles from "./teaching.module.css";
import Card from "./components/Card";
import { useState, useEffect, useRef } from "react";
import Btn from "./components/Btn";

const Teaching = function () {
  const [instrumentsSelected, setInstrumentsSelected] = useState([]);
  const [studioSelected, setStudioSelected] = useState([]);
  const [hoursSelected, setHoursSelected] = useState([]);

  const instSelector = function (tag) {
    let newArray = [...instrumentsSelected, tag];
    setInstrumentsSelected(newArray);
  };

  const instDeselector = function (tagToRemove) {
    const newArray = instrumentsSelected.filter((tag) => tag !== tagToRemove);
    setInstrumentsSelected(newArray);
  };

  const studioSelector = function (tag) {
    let newArray = [...studioSelected, tag];
    setStudioSelected(newArray);
  };

  const studioDeselector = function (tagToRemove) {
    const newArray = studioSelected.filter((tag) => tag !== tagToRemove);
    setStudioSelected(newArray);
  };

  const hoursSelector = function (tag) {
    let newArray = [...hoursSelected, tag];
    setHoursSelected(newArray);
    console.log(newArray == "1,5 hours");
  };

  const hoursDeselector = function (tagToRemove) {
    const newArray = hoursSelected.filter((tag) => tag !== tagToRemove);
    setHoursSelected(newArray);
    console.log(newArray == ["1,5 hours"]);
  };

  // useEffect(() => {
  //   console.log("array1 has changed");
  // }, [instrumentsSelected]);

  // const arrayUpdater = function (tag, previousArray, setter) {
  //   let newArr = [...previousArray, tag];
  //   setter(newArr);
  // };

  const elementToScrollTo = useRef(null);

  const scrollToElement = () => {
    if (elementToScrollTo.current) {
      elementToScrollTo.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.mainText}>
        I would gladly help you with your journey! These are the topics I am
        currently available for teaching, both in Berlin or online:
      </div>
      <button className={styles.applyBtn} onClick={scrollToElement}>
        Apply now
      </button>
      <div className={styles.instrumentsWrapper}>
        <Card
          titleTunnel="Drums"
          levelTunnel="All levels"
          styleTunnel="All styles"
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
          styleTunnel="Accoustic drums"
          widthTunnel={500}
          heightTunnel={500}
          sourceID={11}
          infoTunnel="49 keys keyboard"
        ></Card>
        <Card
          titleTunnel="Studio 2"
          levelTunnel="KreutzigerstraBe, 10247 Berlin"
          styleTunnel="Electronic drums"
          widthTunnel={500}
          heightTunnel={500}
          sourceID={22}
          infoTunnel="88 hammered keys keyboard"
        ></Card>
      </div>
      <div className={styles.mainText}>
        For online courses, I can only use Studio 2.
      </div>
      <div className={styles.mainBtnsWrapper} ref={elementToScrollTo}>
        <div className={styles.btnTitles}>Choose your instrument(s)</div>
        <div className={styles.btnFlex}>
          <Btn
            nameTunnel="Drums"
            pressAction={instSelector}
            unpressAction={instDeselector}
          ></Btn>
          <Btn
            nameTunnel="Piano"
            pressAction={instSelector}
            unpressAction={instDeselector}
          ></Btn>
          <Btn
            nameTunnel="Ableton"
            pressAction={instSelector}
            unpressAction={instDeselector}
          ></Btn>
          <Btn
            nameTunnel="Logic"
            pressAction={instSelector}
            unpressAction={instDeselector}
          ></Btn>
        </div>
        <div className={styles.btnTitles}>Choose the place</div>
        <div className={styles.btnFlex}>
          <Btn
            nameTunnel="Studio 1"
            pressAction={studioSelector}
            unpressAction={studioDeselector}
          ></Btn>
          <Btn
            nameTunnel="Studio 2"
            pressAction={studioSelector}
            unpressAction={studioDeselector}
          ></Btn>
          <Btn
            nameTunnel="At yours"
            pressAction={studioSelector}
            unpressAction={studioDeselector}
          ></Btn>
          <Btn
            nameTunnel="Online"
            pressAction={studioSelector}
            unpressAction={studioDeselector}
          ></Btn>
        </div>
        <div className={styles.btnTitles}>Choose the length of the lesson</div>
        <div className={styles.btnFlex}>
          <Btn
            nameTunnel="1 hour"
            pressAction={hoursSelector}
            unpressAction={hoursDeselector}
          ></Btn>
          <Btn
            nameTunnel="1,5 hours"
            pressAction={hoursSelector}
            unpressAction={hoursDeselector}
          ></Btn>
          <Btn
            nameTunnel="2 hours"
            pressAction={hoursSelector}
            unpressAction={hoursDeselector}
          ></Btn>
        </div>
        <form className={styles.form}>
          <label htmlFor="email">
            {" "}
            <div className={styles.btnTitles}>Leave your email</div>
          </label>
          <input
            className={styles.ins}
            type="email"
            id="email"
            name="email"
            placeholder="email@mail.com"
            required
          />
          <input type="submit" value="Submit" className={styles.submitBtn} />
        </form>
      </div>
      <div className={styles.summary}>
        {`You will be learning
      ${instrumentsSelected} 
      ${
        studioSelected != "" &&
        studioSelected != "At yours" &&
        studioSelected != "Online"
          ? "in"
          : ""
      }
      ${
        studioSelected == "Studio 1" ||
        studioSelected == "Studio 2" ||
        studioSelected == "Online" ||
        studioSelected == "At yours" ||
        studioSelected == ""
          ? studioSelected
          : "too many places"
      }
      ${
        hoursSelected == "1,5 hours" ||
        hoursSelected == "2 hours" ||
        hoursSelected == "1 hour" ||
        hoursSelected == ""
          ? `${hoursSelected == "" ? "" : `during a ${hoursSelected} class.`}`
          : "during too many different hours."
      }
      ${
        (instrumentsSelected == "" &&
          studioSelected == "" &&
          hoursSelected == "") ||
        (studioSelected == "" && hoursSelected == "") ||
        hoursSelected == ""
          ? "..."
          : ""
      }
      `}
      </div>
      <div className={styles.secondaryText}>
        Also, if you subscribe, you will be getting my self-released music for
        free directly to your mailbox.
      </div>
    </>
  );
};

export default Teaching;
