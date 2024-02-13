import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import MyFooter from "./components/MyFooter/MyFooter";




function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <div className="min-h-screen">
     <Outlet></Outlet>
     </div>
      <MyFooter></MyFooter>

     
    </>
  )
}

export default App
