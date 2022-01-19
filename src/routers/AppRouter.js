import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
