import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Popular from "./pages/Popular";
import Battle from "./pages/Battle";
import Result from "./pages/Result";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Popular />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/battle/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
