import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetail from "./pages/AppDetails";
import Installed from "./pages/Installed";
import NotFound from "./pages/NotFound";
import AppNotFound from "./pages/AppNotFound";
import LoadingOverlay from "./components/LoadingOverlay";
import { ToastContainer } from "react-toastify";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300); // simulated route delay
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      {loading && <LoadingOverlay />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/installed" element={<Installed />} />
          <Route path="/app/:id" element={<AppDetail />} />
          <Route path="/app-not-found" element={<AppNotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}
