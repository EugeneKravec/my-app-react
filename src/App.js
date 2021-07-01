import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
// import Profile from "./Components/Profile/Profile";
// import MyPosts from "./Components/Profile/MyPosts/MyPosts";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div class="wrapper-content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
