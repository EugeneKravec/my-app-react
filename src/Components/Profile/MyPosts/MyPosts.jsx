import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>{" "}
      </div>

      <div className = {classes.posts}>
        <Post message="Hi, how are you?" />
        <Post message="it's, my new post?" />
        {/* <Post />
      <Post />
      <Post /> */}
      </div>
    </div>
  );
};
export default MyPosts;
