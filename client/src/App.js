import React from "react";
import './App.css';
import Register from "./pages/register";
import Login from "./pages/login";
import Cards from "./pages/cards";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
