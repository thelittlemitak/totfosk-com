"use client";

import styles from "./teaching.module.css";
import "../global.css";
import Card from "./components/Card";
import { useState, useEffect, useRef } from "react";
import Btn from "./components/Btn";

const Teaching = function () {
  const [instrumentsSelected, setInstrumentsSelected] = useState([]);
  const [studioSelected, setStudioSelected] = useState("");
  const [hoursSelected, setHoursSelected] = useState("");
  const [btnStyle, setBtnStyle] = useState(styles.btnStyle);
  const [joinedString, setJoinedString] = useState("");

  const instSelector = function (tag) {
    let btnTag = tag.target.innerHTML;
    let newArray = [...instrumentsSelected, btnTag];
    setInstrumentsSelected(newArray);
    if (instrumentsSelected.includes(btnTag)) {
      const newArray = instrumentsSelected.filter((tag) => tag !== btnTag);
      setInstrumentsSelected(newArray);
    }
  };

  const studioSelector = function (tag) {
    let btnTag = tag.target.innerHTML;
    setStudioSelected(btnTag);
    if (studioSelected === btnTag) {
      setStudioSelected("");
    }
  };

  const hoursSelector = function (tag) {
    let btnTag = tag.target.innerHTML;
    setHoursSelected(btnTag);
    if (hoursSelected === btnTag) {
      setHoursSelected("");
    }
  };

  // useEffect(() => {
  //   console.log("array1 has changed");
  // }, [instrumentsSelected]);

  // const arrayUpdater = function (tag, previousArray, setter) {
  //   let newArr = [...previousArray, tag];
  //   setter(newArr);
  // };

  useEffect(() => console.log("reRender"), []);

  const elementToScrollTo = useRef(null);

  const scrollToElement = () => {
    if (elementToScrollTo.current) {
      elementToScrollTo.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const submitter = function () {
    if (
      studioSelected == "" ||
      instrumentsSelected == "" ||
      hoursSelected == ""
    ) {
      console.log("empty");
    }
  };

  useEffect(() => {
    setJoinedString(instrumentsSelected.join(", "));
  }, [instrumentsSelected]);

  return (
    <div className="disappeared">
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
        {/* BTNS INSTRUMENTS */}

        <div className={styles.btnTitles}>Choose your instrument(s)</div>
        <div className={styles.btnFlex}>
          <Btn
            nameTunnel="Drums"
            pressAction={instSelector}
            styleTunnel={
              instrumentsSelected.includes("Drums")
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="Piano"
            pressAction={instSelector}
            styleTunnel={
              instrumentsSelected.includes("Piano")
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="Ableton"
            pressAction={instSelector}
            styleTunnel={
              instrumentsSelected.includes("Ableton")
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="Logic"
            pressAction={instSelector}
            styleTunnel={
              instrumentsSelected.includes("Logic")
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
        </div>

        {/* BTNS STUDIOS */}
        <div className={styles.btnTitles}>Choose the place</div>
        <div className={styles.btnFlex}>
          <Btn
            nameTunnel="Studio 1"
            pressAction={studioSelector}
            styleTunnel={
              studioSelected === "Studio 1"
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="Studio 2"
            pressAction={studioSelector}
            styleTunnel={
              studioSelected === "Studio 2"
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="At yours"
            pressAction={studioSelector}
            styleTunnel={
              studioSelected === "At yours"
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="Online"
            pressAction={studioSelector}
            styleTunnel={
              studioSelected === "Online" ? styles.selectedBtn : styles.btnStyle
            }
          ></Btn>
        </div>

        {/* BTNS HOURS */}
        <div className={styles.btnTitles}>Choose the length of the lesson</div>
        <div className={styles.btnFlex}>
          <Btn
            nameTunnel="1 hour"
            pressAction={hoursSelector}
            styleTunnel={
              hoursSelected === "1 hour" ? styles.selectedBtn : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="1,5 hours"
            pressAction={hoursSelector}
            styleTunnel={
              hoursSelected === "1,5 hours"
                ? styles.selectedBtn
                : styles.btnStyle
            }
          ></Btn>
          <Btn
            nameTunnel="2 hours"
            pressAction={hoursSelector}
            styleTunnel={
              hoursSelected === "2 hours" ? styles.selectedBtn : styles.btnStyle
            }
          ></Btn>
        </div>

        {/* FORM FINAL */}

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
          <input
            type="submit"
            value="Submit"
            className={styles.submitBtn}
            onClick={submitter}
          />
        </form>
      </div>

      {/* LA FRASECICA */}

      <div className={styles.summary}>
        {`You will be learning
      ${joinedString} 
      ${
        studioSelected != "" &&
        studioSelected != "At yours" &&
        studioSelected != "Online"
          ? "in"
          : ""
      }
      ${studioSelected === "At yours" ? "at yours" : studioSelected}
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
    </div>
  );
};

export default Teaching;
