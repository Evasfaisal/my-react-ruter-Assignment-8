import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">

              
                <div>
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                        <h2 className="text-lg font-bold">HERO.IO</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We craft innovative apps that simplify your world — turning ideas into digital experiences that inspire productivity.
                    </p>
                </div>

            
                <div>
                    <h3 className="font-semibold text-lg mb-3 text-purple-400">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/apps" className="hover:text-white">Apps</a></li>
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3 text-purple-400">Support</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-white">Community</a></li>
                    </ul>
                </div>

              
                <div>
                    <h3 className="font-semibold text-lg mb-3 text-purple-400">Follow Us</h3>
                    <div className="flex justify-center sm:justify-start gap-5 text-2xl">
                        <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
                        <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400 text-xs sm:text-sm">
                © 2025 HERO.IO — All Rights Reserved.
            </div>
        </footer>
    );
}
