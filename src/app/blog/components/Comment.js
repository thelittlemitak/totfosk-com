import styles from "../blog.module.css";


const Comment = function (props) {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentTitle}>{props.titleTunnel}</div>
      <div className={styles.comment}>{props.commentTunnel}</div>
    </div>
  );
};

export default Comment;
