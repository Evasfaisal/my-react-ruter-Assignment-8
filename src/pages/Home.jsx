import React from "react";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";
import appsData from "../data/app"; // JSON data

export default function Home() {
    const navigate = useNavigate();
    const topApps = appsData.slice(0, 8); // Top 8 apps

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Banner */}
            <section className="text-center py-12 bg-indigo-100 rounded-lg mb-12">
                <h1 className="text-4xl font-bold mb-4">Discover Amazing Apps</h1>
                <p className="text-gray-700 mb-6">Install apps easily and manage them effortlessly.</p>
                <div className="flex justify-center gap-4">
                    <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">App Store</a>
                    <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Play Store</a>
                </div>
            </section>

            {/* States Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-red-100 p-6 rounded-lg text-center font-semibold">Downloads: 1M+</div>
                <div className="bg-green-100 p-6 rounded-lg text-center font-semibold">Reviews: 500K+</div>
                <div className="bg-blue-100 p-6 rounded-lg text-center font-semibold">Top Rated Apps</div>
            </section>

            {/* Top Apps Section */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Top Apps</h2>
                    <button onClick={() => navigate("/apps")} className="text-indigo-600 font-medium hover:underline">Show All</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {topApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            </section>
        </div>
    );
}
