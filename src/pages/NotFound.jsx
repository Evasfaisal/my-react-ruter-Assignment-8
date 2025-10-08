import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="text-center py-24">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-gray-600 mb-6">Page Not Found</p>
            <button onClick={() => navigate("/")} className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Go Home</button>
        </div>
    );
}
