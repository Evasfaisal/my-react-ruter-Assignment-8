import React from "react";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";
import appsData from "../data/app"; // JSON data
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
    const navigate = useNavigate();
    const topApps = appsData.slice(0, 8); // Top 8 apps

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Banner */}
            <section className="text-center py-12   mb-12 ">
                <h1 className="text-7xl font-bold mb-4">We Build</h1>

                <h1 className="text-7xl font-bold mb-4">  <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                    Productive
                </span> Apps</h1>


                <p className="text-gray-400 mb-8">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

          

                <div className="flex justify-center gap-4">
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200"
                    >
                        <img src="fi_16076057.png" alt="Google Play" className="w-6 h-6" />
                        <span>Play Store</span>
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200"
                    >
                        <img src="Group.png" alt="App Store" className="w-6 h-6" />
                        <span>App Store</span>
                    </a>
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
