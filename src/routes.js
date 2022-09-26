import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rate from "./pages/Rate";
import Result from "./pages/Result";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rate />} exact />
        <Route element={<Result />} path="/result/:rate" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
