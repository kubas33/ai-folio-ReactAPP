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
import ImageDetail from "./pages/ImageDetailNew";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";
import RequireAuth from "./core/auth/RequireAuth.tsx";
import { CoreWrapper } from "./core/CoreWrapper.tsx";
import { Suspense } from "react";
import { FullScreenLoader } from "./components/FullScreenLoader.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <CoreWrapper>

          <Suspense fallback={<FullScreenLoader />}>
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
              </Route>
              <Route path="/" element={<RequireAuth><MainLayout /></RequireAuth>}
                errorElement={<RouterError />}>
                <Route path="/categories" element={<Categories />} />
                <Route path="/models" element={<Models />} />
                <Route path="/images" element={<Images />} />
                <Route path="/images/1" element={<ImageDetail />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/addbs" element={<AddImageFormBS />} />
                <Route path="/add" element={<AddImageForm />} />
                <Route path="/categories/add" element={<AddCategory />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/user-settings" element={<UserSettings />} />
              </Route>
              <Route path="*" element={<PageNotFoundError />} />
            </Routes>
          </Suspense>
        </CoreWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
