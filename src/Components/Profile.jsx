import './Profile.css';

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://static.tildacdn.com/tild3239-6363-4036-a137-353162636132/ezgifcom-video-to-gi.gif"
          alt="main_img"
        />
      </div>
      <div>ava + discription</div>
      <div>
        my posts
        <div className='item'>new post</div>
        <div className='item'>post 1</div>
        <div className='item'>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
