import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
// import MyPosts from "./Components/Profile/MyPosts/MyPosts";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
          <div class="wrapper-content">
            <Route path = '/dialogs' component={Dialogs} />
            <Route path = '/profile' component={Profile} />
            <Route path = '/news' component={News} />
            <Route path = '/music' component={Music} />
            <Route path = '/settings' component={Settings} />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
