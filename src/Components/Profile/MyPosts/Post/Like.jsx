import classes from "./Like.module.css";

const Like = (props) => {

  return (
    <div>
      <span>Likes</span> {props.likes}
    </div>
  );
};
export default Like;