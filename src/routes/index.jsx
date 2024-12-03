import React from "react";
import { Route, Routes } from "react-router-dom";
import Company from "../pages/company/Company";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import Careers from "../pages/careers/Careers";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/login/Login";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Router;
