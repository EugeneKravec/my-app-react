import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default MyPosts;
