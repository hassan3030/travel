import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SingleTour from "./pages/tour/SingleTour";
import About from "./pages/about/About";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import icon from "./images/icons/icon.jpeg";
import Favicon from "react-favicon";
import "./App.css";
import { useEffect } from "react";


function App() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <Favicon url={icon} />    
    
      <BrowserRouter >
      <Header />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/tour/:id" element={<SingleTour />} />
             <Route path="/about" element={<About />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
         </Routes>
     <Footer />
    </BrowserRouter> 
  </>
   
  );
}

export default App;
