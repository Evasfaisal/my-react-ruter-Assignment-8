import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import appsData from "../data/app";
import { Download, Star, MessageSquare } from "lucide-react";
import LoadingOverlay from "../components/LoadingOverlay";

export default function AppDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const foundApp = appsData.find((a) => a.id === Number(id));

            // 
            if (!foundApp) {
                navigate("/app-not-found", { replace: true });
            } else {
                setApp(foundApp);
            }

            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id, navigate]);

    useEffect(() => {
        if (app) {
            const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
            if (installedApps.some((a) => a.id === app.id)) {
                setInstalled(true);
            }
        }
    }, [app]);

    const handleInstall = () => {
        if (!app) return;
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (!installedApps.some((a) => a.id === app.id)) {
            const newApp = {
                id: app.id,
                name: app.title,
                downloads: `${Math.floor(app.downloads / 1000000)}M`,
                rating: app.ratingAvg,
                size: app.size,
                image: app.image,
            };
            installedApps.push(newApp);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
            setInstalled(true);
            toast.success(`${app.title} installed successfully!`);
        }
    };

    if (loading) return <LoadingOverlay />;
    if (!app) return null; 

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-50">
            <div className="flex flex-col md:flex-row p-6 border-b border-b-gray-300 items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-52 h-52 object-cover rounded-xl shadow"
                    />
                </div>

                <div className="flex-1">
                    <div className="border-b border-b-gray-300">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                            {app.title}
                        </h1>
                        <p className="text-sm text-gray-500 mb-3">
                            Developed by{" "}
                            <span className="text-indigo-600 font-medium">
                                {app.companyName}
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-4 mb-5 max-w-md">
                        <div className="flex flex-col items-center">
                            <Download className="text-green-600 mb-1" size={20} />
                            <span className="text-xs text-gray-500">Downloads</span>
                            <span className="font-semibold text-lg text-gray-800">
                                {Math.floor(app.downloads / 1000000)}M
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Star className="text-yellow-500 mb-1" size={20} />
                            <span className="text-xs text-gray-500">Average Rating</span>
                            <span className="font-semibold text-lg text-gray-800">
                                {app.ratingAvg}
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <MessageSquare className="text-purple-600 mb-1" size={20} />
                            <span className="text-xs text-gray-500">Total Reviews</span>
                            <span className="font-semibold text-lg text-gray-800">
                                {Math.floor(app.reviews / 1000)}K
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-2 py-2 px-6 rounded-md font-medium text-white transition-all ${installed
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {installed ? "Installed" : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            <div className="p-6 border-b border-b-gray-300">
                <h2 className="font-semibold text-lg mb-6 text-gray-900">Ratings</h2>
                <div className="flex flex-col gap-2">
                    {[5, 4, 3, 2, 1].map((star, i) => (
                        <div key={i} className="flex items-center w-full p-2">
                            <span className="w-12 text-sm text-gray-700 text-right pr-3">
                                {star} ★
                            </span>
                            <div className="flex-1 h-9 bg-gray-300 overflow-hidden">
                                <div
                                    className="h-full bg-orange-500"
                                    style={{ width: `${(6 - star) * 20 + 20}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6">
                <h2 className="font-semibold text-lg mb-3 text-gray-900">Description</h2>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {app.description}
                </p>
            </div>
        </div>
    );
}
