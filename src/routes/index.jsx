import React from "react";
import { Route, Routes } from "react-router-dom";
import Company from "../pages/company/Company";
import Layout from "../pages/layout/Layout";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="company" element={<Company />} />
      </Route>
      {/* <Route path="login" element={<Login />} /> */}
    </Routes>
  );
};

export default Router;
