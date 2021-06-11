import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://static.tildacdn.com/tild3239-6363-4036-a137-353162636132/ezgifcom-video-to-gi.gif"
          alt="main_img"
        />{" "}
      </div>
      <div>
        ava + discription
        </div>
        <MyPosts />
    </div>
  );
};
export default Profile;
