import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              
                <NavLink to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                        <img src="/assets/logo.png" alt="Logo" />
                    </div>
                    <span className="font-semibold text-indigo-700">HERO.IO</span>
                </NavLink>

            
                <nav className="flex-1 flex justify-center gap-6 text-sm text-gray-700">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "font-bold"}>Home</NavLink>
                    <NavLink to="/apps" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "font-bold"}>Apps</NavLink>
                    <NavLink to="/installed" className={({ isActive }) => isActive ? "text-indigo-600 font-bold" : "font-bold"}>Installation</NavLink>
                </nav>

             
           

                <a
                    href="https://github.com/Evasfaisal"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md"
                >
                    <FaGithub className="w-4 h-4" />
                    <span >Contribute</span>
                </a>

            </div>
        </header>

    );
}
