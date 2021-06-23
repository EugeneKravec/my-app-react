import classes from "./Post.module.css";

const Post = (props) => {

  return (
    <div>
      <div className={classes.item}>
        <img src="https://pickaface.net/gallery/avatar/unr_pagal_160928_2025_y76f1.png" alt='pagl' />
        { props.message }
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
