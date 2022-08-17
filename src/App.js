import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Signup/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/register' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>

  );
}

export default App;
