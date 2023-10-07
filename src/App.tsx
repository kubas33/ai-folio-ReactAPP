
import "./theme/main.scss";
import "react-multi-carousel/lib/styles.css";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RouterError from "./errors/RouterError";
import PageNotFoundError from "./errors/PageNotFoundError";
import Categories from "./pages/Categories";
import Images from "./pages/Images";
import Tags from "./pages/Tags";
import Models from "./pages/Models";
import AddImageForm from "./components/AddImageForm";
import AddImageFormBS from "./components/AddImageFormBS";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}  errorElement={<RouterError/>} >
              <Route index={true} path="/home" element={<Home/>}/>
              <Route path="/categories" element={<Categories/>}/>
              <Route path="/models" element={<Models/>}/>
              <Route path="/images" element={<Images/>}/>
              <Route path="/tags" element={<Tags/>}/>
              <Route path="/addbs" element={<AddImageFormBS/>}/>
              <Route path="/add" element={<AddImageForm/>}/>
            </Route>
            <Route path="*" element={<PageNotFoundError/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
