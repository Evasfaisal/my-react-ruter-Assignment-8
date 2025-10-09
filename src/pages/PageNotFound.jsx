import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50 px-4">

            <div className="max-w-md w-full mb-6">
                <img
                    src="/error-404.png"
                    alt="App Not Found"
                    className="w-full object-contain mx-auto"
                />
            </div>


            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Oops, page not found!
            </h1>


            <p className="text-gray-600  mb-6">
                The page you are looking for is not available.
            </p>


            <button
                onClick={() => navigate(-1)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-6 py-2 transition"
            >
                Go Back
            </button>

        </div>
    );
}
