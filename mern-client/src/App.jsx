import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import MyFooter from "./components/MyFooter/MyFooter";




function App() {
  

  return (
    <>
     <Navbar></Navbar>
      <Outlet></Outlet>
      <MyFooter></MyFooter>

     
    </>
  )
}

export default App
