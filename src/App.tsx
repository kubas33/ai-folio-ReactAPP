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
import AddCategory from "./pages/AddCategory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initFromLocalStorage } from "./store/authSlice";
import ImageDetail from "./pages/ImageDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFromLocalStorage());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}
            errorElement={<RouterError />}
          >
            <Route index={true} path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/models" element={<Models />} />
            <Route path="/images" element={<Images />} />
            <Route path="/images/1" element={<ImageDetail />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/addbs" element={<AddImageFormBS />} />
            <Route path="/add" element={<AddImageForm />} />
            <Route path="/categories/add" element={<AddCategory />} />
          </Route>
          <Route path="*" element={<PageNotFoundError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
