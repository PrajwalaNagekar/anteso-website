import { Activity } from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 sm:py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    <div className="col-span-1 sm:col-span-2 md:col-span-2">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <Activity className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-lg sm:text-xl font-bold text-white">ANTESO BIOMEDICAL</span>
                        </div>
                        <p className="text-gray-400 max-w-sm text-sm sm:text-base">
                            Providing cutting-edge medical imaging solutions and certified quality assurance testing across India.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition">Profile</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                            <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                            <li><a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Terms and Conditions</a></li>
                            <li><a href="/delete-account" className="hover:text-red-400 transition text-red-300">Delete My Account</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Service Areas</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Delhi NCR (Head Office)</li>
                            <li>Bangalore</li>
                            <li>Hyderabad</li>
                            <li>Kolkata</li>
                            <li>Patna</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Anteso Biomedical (OPC) Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;