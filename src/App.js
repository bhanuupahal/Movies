import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import MovieDetails from "./Component/MoviesDetails";
import Login from "./Component/LoginSection/Login";
import Layout from "./Component/AdminSection/Layout";
import Dashboard from "./Component/AdminSection/Dashboard";
import UploadNew from './Component/AdminSection/UploadNew';
import UploadHistory from './Component/AdminSection/UploadHistory';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<UploadNew />} />
          <Route path="history" element={<UploadHistory />} />
        </Route>
      </Routes>

      {!isAdminRoute &&<Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
