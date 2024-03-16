import './App.css'
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
        <div>Navbar</div>
        <Outlet/>
    </>
  )
}

export default App
