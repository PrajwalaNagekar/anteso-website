import { ChevronRight, ShieldCheck } from "lucide-react";
import { Activity } from "react";
import qa from "../../src/assets/logo/qa.jpg";
const Hero = () => {
    return (
        <div id="home" className="relative bg-gradient-to-r from-slate-900 to-blue-900 min-h-screen flex items-center pt-24 pb-20 md:pb-0">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-400 bg-blue-400/10 text-blue-200 text-xs sm:text-sm font-medium">
                        <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> AERB Certified Excellence
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Advanced Medical <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                            Imaging Solutions
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                        Ensuring patient safety through precise Quality Assurance, Radiation Safety Audits, and state-of-the-art medical equipment maintenance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <a href="#services" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center justify-center text-sm sm:text-base">
                            Our Services <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a href="#contact" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg font-semibold transition flex items-center justify-center text-sm sm:text-base">
                            Contact Us
                        </a>
                    </div>
                </div>
                {/* Abstract Medical Illustration Placeholder */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-blue-600/30 to-teal-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                        <img src={qa} alt="Quality Assurance" className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;