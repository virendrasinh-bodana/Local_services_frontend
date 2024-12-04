import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Login1 from './components/Login1';
import Profile from './components/Profile';
import Service from './components/Service';
import ProtectedRoutes from './ProtectedRoutes';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import ServiceShow from './components/ServiceShow';
import BrowseService from './components/BrowseService';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
    {/* <Home></Home> */}
    {/* <Register></Register> */}
    <Routes>
      <Route path='/login' element={<Login1/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/adminlogin' element={<AdminLogin/>} />
      {/* <Route path='/showService' element={<ServiceShow/>} /> */}
      <Route path='/browseservice' element = {<BrowseService/>} />
      <Route path='/aboutus' element = {<AboutUs/>} />

      <Route element={<ProtectedRoutes/>}>
      <Route path='/profile' element={<Profile/>} />
      <Route path='/service' element={<Service/>} />
      </Route>
      <Route path='/register' element ={<Register/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
