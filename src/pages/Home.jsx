import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";
import appsData from "../data/app";
import { LoaderContext } from "../context/LoaderContext"; 

export default function Home() {
    const navigate = useNavigate();
    const { triggerLoader } = useContext(LoaderContext);
    const topApps = appsData.slice(0, 8);

    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">We Build</h1>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mr-3">
                        Productive
                    </span>
                    Apps
                </h1>

                <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-gray-200"
                    >
                        <img src="fi_16076057.png" alt="Google Play" className="w-6 h-6" />
                        <span>Play Store</span>
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-gray-200"
                    >
                        <img src="Group.png" alt="App Store" className="w-6 h-6" />
                        <span>App Store</span>
                    </a>
                </div>
            </section>

            <section className="flex justify-center mb-[-48px]">
                <img
                    src="/hero.png"
                    alt="App Preview"
                    className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
                />
            </section>

            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-16 px-4 mt-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">Trusted By Millions, Built For You</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {[
                        { num: "29.6M", label: "Total Downloads", sub: "21% More Than Last Month" },
                        { num: "906K", label: "Total Reviews", sub: "46% More Than Last Month" },
                        { num: "132+", label: "Active Apps", sub: "31 More Will Launch" },
                    ].map((item, i) => (
                        <div key={i}>
                            <p className="text-4xl font-extrabold">{item.num}</p>
                            <p className="text-sm uppercase tracking-wide">{item.label}</p>
                            <p className="text-xs opacity-80">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

           
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-3">Trending Apps</h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Explore all trending apps on the market developed by us.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {topApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            triggerLoader(); // 
                            setTimeout(() => navigate("/apps"), 300); // 
                        }}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90"
                    >
                        Show All
                    </button>
                </div>
            </section>
        </div>
    );
}
