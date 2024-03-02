
import {BrowserRouter,Route, Routes} from "react-router-dom";

import './App.css'

//Pages
import {Home ,Contact,Login,Register,Reset} from "./pages/index.jsx"

//Components
import {Header, Footer} from "./components/index.jsx"



function App() {

  return (
    <>
    <BrowserRouter>

      <Header/>
     
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/reset" element={<Reset/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
