import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Posts from './Pages/Posts/Posts';
import PostDetail from './Pages/Posts/PostDetail';
import Users from './Pages/Users/Users';
import UserDetail from './Pages/Users/UserDetail';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:postId' element={<PostDetail/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
