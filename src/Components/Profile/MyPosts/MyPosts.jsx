import s from "./MyPosts.module.css";
import Post from "./Post/Post";
// import Like from "./Post/Like";

const MyPosts = (props) => {

  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it's, my new post?", likesCount: 11}
  ]

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>{" "}
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>{" "}
        <div>
          <button>Remove</button>{" "}
        </div>
      </div>

      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        {/* <Like value="- 23" /> */}
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        {/* <Like value="- 12223" /> */}
      </div>
    </div>
  );
};
export default MyPosts;
