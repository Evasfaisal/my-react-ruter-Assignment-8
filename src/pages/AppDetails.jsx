import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AppCard from "../components/AppCard";
import appsData from "../data/app";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function AppDetail() {
    const { id } = useParams();
    const app = appsData.find(a => a.id === Number(id));
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (installedApps.includes(app?.id)) setInstalled(true);
    }, [app]);

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        localStorage.setItem("installedApps", JSON.stringify([...installedApps, app.id]));
        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);
    };

    if (!app) return <div className="text-center py-12">App Not Found</div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* App Info */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                <img src={app.image} alt={app.title} className="w-full md:w-1/3 h-60 object-cover rounded-lg" />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
                    <p className="text-gray-600 mb-2">★ {app.ratingAvg} • {app.downloads.toLocaleString()} downloads • {app.reviews.toLocaleString()} reviews</p>
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-4 py-2 px-6 rounded ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
                    >
                        {installed ? "Installed" : "Install"}
                    </button>
                </div>
            </div>

            {/* Description */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700">{app.description}</p>
            </section>

            {/* Reviews Chart */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Reviews Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={app.ratings}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </section>
        </div>
    );
}
