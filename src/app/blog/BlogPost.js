const BlogPost = function (props) {
  return (
    <div className={styles.mainPost}>
      <div className={styles.title}>{props.titleTunnel}</div>
      <div className={styles.date}></div>
      <div className={styles.body}>{props.bodyTunnel}</div>
    </div>
  );
};

export default BlogPost;
