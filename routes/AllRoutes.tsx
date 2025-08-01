import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page2 } from "../pages/Page2";
import Page3 from "../pages/Page3";
import { Page4 } from "../pages/Page4";
import { Page5 } from "../pages/Page5";
import { Page6 } from "../pages/Page6";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
        <Route path="page5" element={<Page5 />} />
        <Route path="page6" element={<Page6 />} />
      </Routes>
    </>
  );
};
