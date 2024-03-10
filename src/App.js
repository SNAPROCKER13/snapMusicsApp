import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
// import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className='bg-neutral-300'>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Login/>} /> 
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/register" element={<Register/>} />     
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
