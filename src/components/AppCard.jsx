import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";

export default function AppCard({ app, installed, onInstall, onUninstall }) {
    return (
        <Link
            to={`/app/${app.id}`}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer p-3"
        >
        
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-3">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                />
            </div>

        
            <div className="flex-1 mb-3">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                    {app.title}
                </h3>
              
            </div>

            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 bg-green-50 text-green-600 text-xs font-medium px-2 py-1 rounded-md">
                    <FaDownload className="text-[10px]" />
                    {app.size}M
                </div>
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 text-xs font-medium px-2 py-1 rounded-md">
                    <FaStar className="text-[10px]" />
                    {app.ratingAvg.toFixed(1)}
                </div>
            </div>

        
            <div
                className="mt-auto"
                onClick={(e) => e.stopPropagation()} 
            >
                {!installed && onInstall && (
                    <button
                        onClick={onInstall}
                        className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-md transition"
                    >
                        Install
                    </button>
                )}
                {installed && !onUninstall && (
                    <button
                        disabled
                        className="w-full bg-gray-400 text-white text-sm py-2 rounded-md cursor-not-allowed"
                    >
                        Installed
                    </button>
                )}
                {installed && onUninstall && (
                    <button
                        onClick={onUninstall}
                        className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-md transition"
                    >
                        Uninstall
                    </button>
                )}
            </div>
        </Link>
    );
}
