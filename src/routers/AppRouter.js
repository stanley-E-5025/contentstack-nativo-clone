import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://stanley-e-5025.github.io/contentstack-nativo-clone/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}
