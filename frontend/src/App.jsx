import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import { ContactForm } from "./pages/contact"

function App() {

  return (
    <> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

