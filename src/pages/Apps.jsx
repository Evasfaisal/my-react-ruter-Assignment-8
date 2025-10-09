import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import appsData from "../data/app";
import LoadingOverlay from "../components/LoadingOverlay";

export default function Apps() {
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
 
    if (search.trim() === "") {
      setFilteredApps(appsData);
      setLoading(false);
      return;
    }

    setLoading(true);


    const timer = setTimeout(() => {
      const filtered = appsData.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-8 min-h-screen">
    
      {loading && <LoadingOverlay />}

   
      <div className="text-center">
        <h1 className="text-4xl mb-4 font-extrabold">Our All Applications</h1>
        <p className="text-gray-600 mb-6">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

 
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <span className="font-bold text-gray-800">
          Total Apps: {filteredApps.length}
        </span>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-64 shadow-sm focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {!loading && (
        <>
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">No App Found</div>
          )}
        </>
      )}
    </div>
  );
}
