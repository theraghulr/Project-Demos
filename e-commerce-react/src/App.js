import React from "react";
import Nav from "./navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import './App.css'


function App() {
  return (
    <div className="app-layout">
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className=" ">
      <Nav />
      <Recommended />
      <Products />
      </div>
      
    </div>
  );
}

export default App;


