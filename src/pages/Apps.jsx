import React, { useState } from "react";
import AppCard from "../components/AppCard";
import appsData from "../data/app";

export default function Apps() {
  const [search, setSearch] = useState("");
  const filteredApps = appsData.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">All Apps</h1>
      <p className="text-gray-600 mb-6">Browse and discover your favorite apps.</p>

      {/* Search */}
      <div className="flex justify-between mb-6">
        <span>Total Apps: {filteredApps.length}</span>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-64"
        />
      </div>

      {/* App Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">No App Found</div>
      )}
    </div>
  );
}
