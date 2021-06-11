import classes from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    
      <div>
        my posts
        <div className={classes.item}>new post</div>
        <div className={classes.item}>post 1</div>
        <div className={classes.item}>post 2</div>
      </div>
    
  );
};
export default MyPosts;
