import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-12">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded" />
                    <div className="font-semibold">HERO.IO</div>
                </div>
                <div className="text-sm opacity-70">Copyright © 2025 - All rights reserved</div>
                <div className="flex items-center gap-4">
                    <a href="#" aria-label="github" className="hover:text-gray-300"><FaGithub /></a>
                    <a href="#" aria-label="linkedin" className="hover:text-gray-300"><FaLinkedin /></a>
                    <a href="#" aria-label="facebook" className="hover:text-gray-300"><FaFacebook /></a>
                </div>
            </div>
        </footer>
    );
}
