import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import MyPosts from './Components/Profile/MyPosts/MyPosts';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
      <MyPosts />
    </div >
  );
}

export default App;
