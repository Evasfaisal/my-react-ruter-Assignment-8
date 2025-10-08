import React from "react";
import { useNavigate } from "react-router-dom";

export default function AppNotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
            <p className="text-gray-600 mb-4">The app you are looking for does not exist.</p>
            <button onClick={() => navigate("/apps")} className="bg-blue-500 text-white px-4 py-2 rounded">Go to Apps</button>
        </div>
    );
}
