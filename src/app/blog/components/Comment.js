import styles from "../blog.module.css";

const Comment = function (props) {
  const somethinger = function () {
    return;
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentTitle}>{props.titleTunnel}</div>
      <div className={styles.comment}>{props.commentTunnel}</div>
      <div
        className={
          props.userTunnel == "Inputero" ? styles.remover : styles.hidden
        }
      >
        <button onClick={props.removerFTunnel}>Remove</button>
      </div>
    </div>
  );
};

export default Comment;
