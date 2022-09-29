import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Posts from './Pages/Posts/Posts';
import Users from './Pages/Users/Users';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
