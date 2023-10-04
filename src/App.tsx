import { useState, useEffect } from "react";
import "./theme/main.scss";
import "react-multi-carousel/lib/styles.css";

import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";

function App() {
  return (
    <>
      <MainNavbar />

      <hr />
      <main className="vh-100">
        {/* <Home /> */}
        <ImageDetail />
      </main>
    </>
  );
}

export default App;
