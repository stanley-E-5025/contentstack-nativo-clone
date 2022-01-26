import React from "react";
import AppRouter from "./routers/AppRouter";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
