import { useState, useEffect } from "react";
import "./theme/main.scss";
import "react-multi-carousel/lib/styles.css";

import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";
import AddImageForm from "./components/AddImageForm";

function App() {
  return (
    <>
      <MainNavbar />

      <hr />
      <main className="bg-body-tertiary">
        {/* <Home /> 
        <ImageDetail />*/}
        <AddImageForm />
      </main>
    </>
  );
}

export default App;
