import AboutPage from './components/pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/sections/navbar';
import Footer from './components/footer';
import TeamPage from './components/pages/Team';
import QuizzesPage from './components/pages/Quizzes';
import ContactPage from './components/pages/Contact';
import LoginPage from './components/pages/Loginpage';
import ForgetpassPage from './components/pages/Forgetpass';
import OTPPage from './components/pages/OTP';
import NewpassPage from './components/pages/Newpass';
import CreateaccntPage from './components/pages/Createaccnt';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/Team" element={<TeamPage />} /> 
            <Route path="/Quiz" element={<QuizzesPage />} /> 
            <Route path="/Contact" element={<ContactPage />} /> 
            <Route path="/Login" element={<LoginPage />} /> 
            <Route path="/Forgetpass" element={<ForgetpassPage/>} /> 
            <Route path="/OTP" element={<OTPPage/>} /> 
            <Route path="/Newpass" element={<NewpassPage/>} /> 
            <Route path="/Createaccnt" element={<CreateaccntPage/>} /> 
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
