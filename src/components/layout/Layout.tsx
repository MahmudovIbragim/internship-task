import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import About from "../pages/About";
import Product from "../pages/Product";
import Favorite from "../pages/Favorite";
const Layout = () => {
  return (
    <>
      <div className={scss.Layout}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/car/:id" element={<About/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
