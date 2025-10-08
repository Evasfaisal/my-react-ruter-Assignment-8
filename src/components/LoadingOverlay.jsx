import React from "react";

export default function LoadingOverlay() {
    return (
        <div className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
                <svg className="animate-spin h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span>Loading...</span>
            </div>
        </div>
    );
}
