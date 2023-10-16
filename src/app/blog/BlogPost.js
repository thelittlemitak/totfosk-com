"use client";

import { useState } from "react";
import styles from "./blog.module.css";
import Comment from "./components/Comment";
import Image from "next/image";
import currentDate from "../_shared/misc/currentDate"

const BlogPost = function (props) {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleString(undefined, options);

  const [importedComments, setImportedComments] = useState(
    props.commentsTunnel
  );
  const [inputed, setInputed] = useState("");
  const [inputStyle, setInputStyle] = useState(1);

  const inputer = function (e) {
    let inputed = e.target.value;
    if (inputed !== "") {
      setInputStyle(1);
    }
    setInputed(inputed);
  };

  let newNumber = Math.random();

  const commentPusher = function () {
    if (inputed === "") {
      setInputStyle(2);
      return;
    }
    let oldArray = importedComments;
    let newArray = [
      ...oldArray,
      {
        user: "Inputero",
        comment: inputed,
        date: currentDate,
        key: newNumber,
      },
    ];
    setImportedComments(newArray);
    setInputed("");
  };

  const commentRemover = (key) => {
    // Use the key to filter out the comment you want to remove
    const filteredComments = importedComments.filter(
      (comment) => comment.key !== key
    );
    setImportedComments(filteredComments);
  };

  const keyPusher = function (e) {
    if (e.code == "Enter") {
      console.log("enter has been pressed");
      commentPusher();
    }
  };

  return (
    <div className={styles.mainPost}>
      <div className={styles.titleFlex}>
        <div
          className={styles.title}
        >{`#${props.indexTunnel} - ${props.titleTunnel}`}</div>
        <div className={styles.date}>{formattedDate.toString()}</div>
      </div>
      <Image
        width={500}
        height={500}
        src={`/blogNOTPREPARED/${props.picIDTunnel}.webp`}
        alt={"this is a picture of my grandpa doing amazing things"}
        className={styles.image}
      ></Image>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>{props.bodyTunnel}</div>
        {importedComments.map((x) => {
          return (
            <Comment
              titleTunnel={`${x.user}, on ${x.date}:`}
              commentTunnel={x.comment}
              key={x.key}
              userTunnel={x.user}
              removerFTunnel={() => commentRemover(x.key)} // Pass the key to the commentRemover
            ></Comment>
          );
        })}
        <input
          className={
            inputStyle === 1 ? styles.commentInput : styles.commentInputWrong
          }
          placeholder="New comment"
          type="text"
          value={inputed}
          onChange={inputer}
          onKeyDown={keyPusher}
        ></input>
        <button className={styles.submitBtn} onClick={commentPusher}>
          Post comment
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
