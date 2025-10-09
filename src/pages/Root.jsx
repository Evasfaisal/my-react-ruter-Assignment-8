
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import LoadingOverlay from "../components/LoadingOverlay";
import "react-toastify/dist/ReactToastify.css";
import { LoaderContext } from "../context/LoaderContext";




export default function Root() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    const triggerLoader = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <LoaderContext.Provider value={{ triggerLoader }}>
            <div className="min-h-screen flex flex-col bg-gray-50 relative">
                {loading && <LoadingOverlay />}

                <Header />

                <main className="flex-1">
                    <Outlet />
                </main>

                <Footer />

                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </LoaderContext.Provider>
    );
}
