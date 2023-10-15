import styles from "./blog.module.css";
import BlogPost from "./BlogPost";
import posts from "../../data/posts";

const Blog = function () {
  return (
    <div className="disappeared">
      {posts.map((x) => {
        return (
          <BlogPost
            titleTunnel={x.title}
            bodyTunnel={x.body}
            key={x.key}
          ></BlogPost>
        );
      })}
    </div>
  );
};

export default Blog;
