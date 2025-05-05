import './App.css';
import { Route, Routes } from 'react-router-dom';
import './i18next.js';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Book from './Components/Book/Book.jsx';
import MainPages from './Pages/MainPages/MainPages';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import {
  getAuthState,
  userGetData,
} from './Components/Services/authService.js';
import About from './Components/About/index.js';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      await getAuthState();
    };
    fetchData();
  }, []);
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div>
        {/* <Home />
        <Main /> */}
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/home" element={<MainPages />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
