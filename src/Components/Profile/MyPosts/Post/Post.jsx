import classes from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://pickaface.net/gallery/avatar/unr_pagal_160928_2025_y76f1.png" />
        new post
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
