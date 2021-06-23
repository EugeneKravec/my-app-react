import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import Like from "./Post/Like";

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
        <Like value = '- 23'/>
        <Post message ="it's, my new post?" />
        <Like value = '- 12223'/>
        {/* <Post />
      <Post />
      <Post /> */}
      </div>
    </div>
  );
};
export default MyPosts;
