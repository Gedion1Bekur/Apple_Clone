import "bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SharedLayout from "./page/sharedLayout/SharedLayout";

import Mac from "./page/mac/Mac";
import { Route, Routes } from "react-router-dom";

import Main from "./Components/Main/Main/Main";
// import ProductPage from './page/Tade/Tade'
import SingleProduct from "./page/singleProduct/SingleProduct";
import './App.css'
//!pages

import Iphone from "./page/Iphone/Iphone";
import Ipad from "./page/Ipad/Ipad";
import WatchNav from "./page/watchNav/WatchNav";
import Tv from "./page/Tv/Tv";
import Music from "./page/music/Muisc";
import Support from "./page/Support/Support";
import Search from "./page/seacrch/Search";
import Cart from "./page//cart/Cart";
import Four04 from "./page/Four04/Four04";
import Offcanva from './page/Offcanvas/Offcannva'
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />

          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productId" element={<SingleProduct />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<WatchNav />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
      {/* <Main /> */}
     <Offcanva/>
    </>
  );
}
