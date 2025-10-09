import React, { useState, useContext } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LoaderContext } from "../context/LoaderContext";


export default function Header() {
    const [open, setOpen] = useState(false);
    const { triggerLoader } = useContext(LoaderContext); 

    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

              
                <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                    <span className="font-semibold text-indigo-700 text-lg">HERO.IO</span>
                </NavLink>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                <nav
                    className={`${open ? "block" : "hidden"
                        } absolute md:static bg-white md:flex md:items-center w-full md:w-auto left-0 top-[70px] md:top-auto border-t md:border-none md:space-x-8 text-center md:text-left transition-all`}
                >
                    <NavLink
                        to="/"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-bold"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/apps"
                        onClick={() => {
                            triggerLoader();
                            setOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-bold"
                    >
                        Apps
                    </NavLink>

                    <NavLink
                        to="/installed"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-bold"
                    >
                        Installation
                    </NavLink>
                </nav>

            
                <a
                    href="https://github.com/Evasfaisal"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:opacity-90"
                >
                    <FaGithub className="w-4 h-4" />
                    <span>Contribute</span>
                </a>
            </div>
        </header>
    );
}
