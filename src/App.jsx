import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./i18next.js";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Book from "./Components/Book/Book.jsx";
import MainPages from "./Pages/MainPages/MainPages";
import Contact from "./Pages/Contact/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div>
        {/* <Home />
        <Main /> */}
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/Home" element={<MainPages />} />
          <Route path="/book" element={<Book />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
