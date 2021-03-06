import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
// import MyPosts from "./Components/Profile/MyPosts/MyPosts";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News"
import Music from "./Components/Music/Music"
import Settings from "./Components/Settings/Settings"
import { BrowserRouter, Route } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
          <div className="wrapper-content">
            <Route path = '/profile' component={Profile} /> 
            <Route path = '/dialogs' component={Dialogs} />
            <Route path = '/news' component={News} />
            <Route path = '/music' component={Music} />
            <Route path = '/settings' component={Settings} />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
