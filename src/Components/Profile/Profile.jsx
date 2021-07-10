import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://static.tildacdn.com/tild3239-6363-4036-a137-353162636132/ezgifcom-video-to-gi.gif"
          alt="main_img"
        />{" "}
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
