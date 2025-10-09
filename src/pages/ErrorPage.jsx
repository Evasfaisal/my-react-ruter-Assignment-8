import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
            <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
            <p className="text-gray-600 mb-2">Something went wrong.</p>
            <p className="text-sm text-gray-400 mb-6">
                {error.statusText || error.message}
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
                Go Home
            </Link>
        </div>
    );
}
