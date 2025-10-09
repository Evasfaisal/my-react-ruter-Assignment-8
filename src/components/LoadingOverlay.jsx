
import React from "react";

export default function LoadingOverlay() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex items-center text-4xl font-bold text-indigo-700">
             
                <span className="mr-2">L</span>

              
                <img
                    src="/logo.png" 
                    alt="Loading"
                    className="w-14 h-14 animate-spin-slow"
                />

              
                <span className="ml-2 flex items-center">
                    DING
                    <span className="flex gap-[2px] ml-1 text-indigo-500">
                        <span className="animate-bounce delay-100">.</span>
                        <span className="animate-bounce delay-200">.</span>
                        <span className="animate-bounce delay-300">.</span>
                    </span>
                </span>
            </div>
        </div>
    );
}
