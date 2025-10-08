import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import appsData from "../data/app";
import { toast } from "react-toastify";

export default function Installed() {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem("installedApps") || "[]");
        setInstalledApps(appsData.filter(a => ids.includes(a.id)));
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(a => a.id !== id);
        setInstalledApps(updated);
        const localIds = updated.map(a => a.id);
        localStorage.setItem("installedApps", JSON.stringify(localIds));
        toast.success("App uninstalled successfully");
    };

    if (installedApps.length === 0) return <div className="text-center py-12">No Installed Apps</div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">My Installation</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {installedApps.map(app => (
                    <AppCard key={app.id} app={app} installed={true} onUninstall={() => handleUninstall(app.id)} />
                ))}
            </div>
        </div>
    );
}
