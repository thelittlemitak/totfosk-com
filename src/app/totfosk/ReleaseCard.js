"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

const ReleaseCard = function (props) {
  function playAudio(audioId) {
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play(); // If the audio is paused, play it
      } else {
        audioElement.pause(); // If the audio is playing, pause it
      }
    }
  }

  useEffect(() => {
    const audioElements = props.albumTunnel.tracks.map((x) =>
      document.getElementById(`audio-${x.key}`)
    );

    const inputRangeElements = props.albumTunnel.tracks.map((x) =>
      document.getElementById(`progress-${x.key}`)
    );

    function updateInputRange(audioElement, inputRange) {
      if (audioElement && inputRange) {
        inputRange.value =
          (audioElement.currentTime / audioElement.duration) * 100;
      }
    }

    audioElements.forEach((audioElement, index) => {
      if (audioElement) {
        audioElement.addEventListener("timeupdate", () => {
          updateInputRange(audioElement, inputRangeElements[index]);
        });
      }
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      audioElements.forEach((audioElement) => {
        if (audioElement) {
          audioElement.removeEventListener("timeupdate", () => {
            updateInputRange(audioElement, inputRangeElements[index]);
          });
        }
      });
    };
  }, [props.albumTunnel.tracks]);

  function handleProgressChange(audioKey, newProgress) {
    // Find the audio element associated with the given key
    const audioElement = document.getElementById(`audio-${audioKey}`);

    if (audioElement) {
      const newTime = (newProgress / 100) * audioElement.duration;
      audioElement.currentTime = newTime;
    }
  }

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
                  onClick={() => playAudio(`audio-${x.key}`)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                  />
                </svg>
                <audio id={`audio-${x.key}`}>
                  <source src={`audio/${x.key}.mp3`} type="audio/mpeg" />
                </audio>
              </div>
              <input
                type="range"
                defaultValue="00"
                className={styles.progress}
                id={`progress-${x.key}`}
                onChange={(e) => handleProgressChange(x.key, e.target.value)}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReleaseCard;
