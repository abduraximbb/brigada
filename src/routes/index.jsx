import React from "react";
import { Route, Routes } from "react-router-dom";
import Company from "../pages/company/Company";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import Career from "../pages/careers";
import NotFound from "../pages/not-found/NotFound";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careers" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
