import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Navbar />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
