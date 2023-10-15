import styles from "./blog.module.css";
import Comment from "./components/Comment";
import Image from "next/image";

const BlogPost = function (props) {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleString(undefined, options);

  const user = "Balinotrix";
  const commentTitle = `${user}, on ${formattedDate}:`;
  const commentFromSomeone =
    "This is a comment explaining shiiiii explaining shiiiii explaining shiiiii explaining shiiiii explaining shiiiii explaining shiiiii explaining shiiiii";

  const imageStyle = {
    height: "100%",
    maxWidth: "1200px",
  };
  return (
    <div className={styles.mainPost}>
      <div className={styles.titleFlex}>
        <div className={styles.title}>{props.titleTunnel}</div>
        <div className={styles.date}>{formattedDate.toString()}</div>
      </div>
      <div
        className={styles.imageCont}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={"/blogNOTPREPARED/111.webp"}
          alt={"this is a picture of my grandpa doing amazing things"}
        ></Image>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>{props.bodyTunnel}</div>
        <Comment
          titleTunnel={commentTitle}
          commentTunnel={commentFromSomeone}
        ></Comment>
        <Comment
          titleTunnel={commentTitle}
          commentTunnel={commentFromSomeone}
        ></Comment>
        <Comment
          titleTunnel={commentTitle}
          commentTunnel={commentFromSomeone}
        ></Comment>
        <input
          className={styles.commentInput}
          placeholder="New comment"
          type="text"
        ></input>
        <input
          type="submit"
          value="Post comment"
          className={styles.submitBtn}
        />
      </div>
    </div>
  );
};

export default BlogPost;
