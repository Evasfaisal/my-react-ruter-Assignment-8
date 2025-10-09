import React, { useEffect, useState } from "react";
import { Download, Star } from "lucide-react";
import { toast } from "react-toastify";
import LoadingOverlay from "../components/LoadingOverlay";

export default function Installed() {
    const [apps, setApps] = useState([]);
    const [sortBy, setSortBy] = useState("downloads-high-low");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const stored = JSON.parse(localStorage.getItem("installedApps") || "[]");
            setApps(stored);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleUninstall = (id) => {
        const updated = apps.filter((a) => a.id !== id);
        setApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
        toast.info("App uninstalled successfully!");
    };

    const handleSortChange = (value) => {
        setSortBy(value);
        let sorted = [...apps];

        if (value === "downloads-high-low")
            sorted.sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
        if (value === "downloads-low-high")
            sorted.sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads));

        setApps(sorted);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6 relative">
            {loading && <LoadingOverlay />}

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">Your Installed Apps</h1>
                <p className="text-gray-500 mt-2">
                    Explore all apps you’ve installed so far.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <p className="text-lg font-semibold text-gray-800">
                    {apps.length} Apps Found
                </p>

                <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border border-gray-300 text-gray-600 text-sm rounded-lg px-3 py-2 focus:outline-none"
                >
                    <option value="downloads-high-low">Sort by Downloads (High-Low)</option>
                    <option value="downloads-low-high">Sort by Downloads (Low-High)</option>
                </select>
            </div>

            {!loading && (
                <div className="space-y-4">
                    {apps.length === 0 ? (
                        <p className="text-center text-gray-500">No apps installed yet.</p>
                    ) : (
                        apps.map((app) => (
                            <div
                                key={app.id}
                                className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between p-4 transition hover:shadow-lg"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={app.image}
                                        alt={app.name}
                                        className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg">
                                            {app.name}
                                        </h3>
                                        <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                                            <span className="flex items-center gap-1 text-green-600">
                                                <Download size={14} /> {app.downloads}
                                            </span>
                                            <span className="flex items-center gap-1 text-yellow-500">
                                                <Star size={14} /> {app.rating}
                                            </span>
                                            <span className="text-gray-500">{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="mt-4 sm:mt-0 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium transition"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
