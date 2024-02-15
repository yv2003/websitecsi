import React from "react";
import { Route, Routes } from "react-router-dom";
// import ScrollToTop from "./components/scrolltotop";
import "./App.css";
import { Teams, Home, Sponsors, Events, WComittee } from "./components/pages";
// import {
//   BrowserRouter as
//   Route,
//   Routes,
// } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* <ScrollToTop /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/wc" element={<WComittee />} />
      </Routes>
    </div>
  );
}
