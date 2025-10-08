import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ app, installed, onInstall, onUninstall }) {
    return (
        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition flex flex-col">
            <Link to={`/app/${app.id}`}>
                <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded mb-3" />
            </Link>
            <div className="flex-1">
                <h3 className="font-semibold">{app.title}</h3>
                <div className="text-sm text-gray-500 mt-1">★ {app.ratingAvg} • {app.downloads.toLocaleString()} downloads</div>
                <div className="text-sm text-gray-500 mt-1">{app.size} MB • {app.reviews.toLocaleString()} reviews</div>
            </div>
            {onInstall && !installed && (
                <button onClick={onInstall} className="mt-3 bg-green-500 hover:bg-green-600 text-white py-2 rounded w-full">Install</button>
            )}
            {installed && (
                <button disabled className="mt-3 bg-gray-400 cursor-not-allowed text-white py-2 rounded w-full">Installed</button>
            )}
            {onUninstall && (
                <button onClick={onUninstall} className="mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded w-full">Uninstall</button>
            )}
        </div>
    );
}
