"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

const ReleaseCard = function (props) {
  const audioRefs = props.albumTunnel.tracks.map(() => useRef());
  const playRefs = props.albumTunnel.tracks.map(() => useRef());
  const progressRefs = props.albumTunnel.tracks.map(() => useRef());

  useEffect(() => {
    audioRefs.forEach((audioRef, index) => {
      audioRef.current.onloadedmetadata = function () {
        progressRefs[index].current.max = audioRef.current.duration;
      };
    });
  }, [audioRefs, progressRefs]);

  return (
    <div className={styles.releaseContainer}>
      <div className={styles.albumTitleWrapper}>
        <Image
          height={300}
          width={300}
          src={`/totfosk/${props.albumTunnel.key}.webp`}
          alt="this is the cover image of a music album"
        ></Image>
      </div>
      <div>
        <div
          className={styles.albumTitle}
        >{`${props.albumTunnel.album} - ${props.albumTunnel.label} - ${props.albumTunnel.date}`}</div>

        {props.albumTunnel.tracks.map((x, index) => {
          return (
            <div key={x.key} className={styles.titleContainer}>
              <div className={styles.titleFlex}>
                <div>{`${index + 1}. ${x.title} -`}</div>
                <div> {` ${x.duration} -`}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  ref={playRefs[index]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                  />
                </svg>
                <audio controls ref={audioRefs[index]}>
                  <source src={`audio/${x.key}.mp3`} type="audio/mpeg" />
                </audio>
              </div>
              <input
                type="range"
                defaultValue="10"
                id={styles.progress}
                ref={progressRefs[index]}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReleaseCard;
