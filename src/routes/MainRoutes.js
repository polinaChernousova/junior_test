import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DetailsPage from "../pages/DetailsPage";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<p>There&apos;s nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
