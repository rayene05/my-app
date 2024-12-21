import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import { Route, Routes, useLocation } from "react-router-dom";
import Register from './pages/Register';
import User from './pages/User';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard'
import Data from './pages/Data';
import Calendar from './pages/Calendar';
import Faq from './pages/Faq';
import Barchart from './pages/Barchart';
import Piechart from './pages/Piechart';
import Linechart from './pages/Linechart';

function App() {
  const location = useLocation();

  // Determine if the navbar should be shown based on the current route
  const shouldShowNavbar = !location.pathname.startsWith('/login') && !location.pathname.startsWith('/register') && !location.pathname.startsWith('/user');

  return (
    
      <div className="App">
        {shouldShowNavbar && <Navbar />}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/user' element={<User/>}>
            <Route index element={<Dashboard/>}/> 
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/data' element={<Data/>}/>
            <Route path='/user/calendar' element={<Calendar/>}/>
            <Route path ='/user/FaQ' element={<Faq/>}/>
            <Route path='/user/Barchart' element={<Barchart/>}/>
            <Route path='/user/Piechart'element={<Piechart/>}/>
            <Route path='/user/Linechart' element={<Linechart/>}/>
          </Route>
        
        </Routes>
      </div>
    
  );
}

export default App;