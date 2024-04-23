import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Register from './component/Resgister';
import UserProfile from './component/UserProfile';
import Navbar from './component/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />

      </Routes>

    </div>
  );
}

export default App;
