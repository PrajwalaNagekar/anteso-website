import { Mail, MapPin, Phone, MessageCircle, Clock, AlertTriangle } from "lucide-react";

const Contact = () => {
    return (
        <div id="contact" className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Get In Touch</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-7 md:mb-8">
                            Need a quote for QA services or looking to purchase new equipment?
                            Reach out to our Head Office in Delhi or our regional teams.
                        </p>

                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg text-blue-600 shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="ml-3 sm:ml-4">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Head Office</h4>
                                    <p className="text-sm sm:text-base text-gray-600">Flat No. 290, 2nd Floor, Block D,<br />Rohini Sector 6, New Delhi - 110085</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg text-blue-600 shrink-0">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="ml-3 sm:ml-4">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Phone</h4>
                                    <p className="text-sm sm:text-base text-gray-600">+91 847 090 9720</p>
                                    <p className="text-xs sm:text-sm text-gray-500">Mon - Sat, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg text-blue-600 shrink-0">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="ml-3 sm:ml-4">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Email</h4>
                                    <p className="text-sm sm:text-base text-gray-600">info@antesobiomedicalopc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Support & Map */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Support</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="https://wa.me/918470909720" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition">
                                    <div className="bg-green-500 p-2 rounded-lg text-white mr-3">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-green-700 uppercase">WhatsApp</p>
                                        <p className="text-sm font-bold text-gray-900">Chat with us</p>
                                    </div>
                                </a>

                                <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="bg-blue-600 p-2 rounded-lg text-white mr-3">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-blue-700 uppercase">Hours</p>
                                        <p className="text-sm font-bold text-gray-900">9AM - 6PM</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-amber-50 rounded-xl border border-amber-100 sm:col-span-2">
                                    <div className="bg-amber-500 p-2 rounded-lg text-white mr-3">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-amber-700 uppercase">Emergency Support</p>
                                        <p className="text-sm font-bold text-gray-900">+91 84709 09720 (24/7 Service)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 h-[300px] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                <MapPin className="w-8 h-8 text-gray-400" />
                            </div>
                            <iframe
                                title="Anteso Biomedical Office"
                                className="w-full h-full rounded-xl relative z-10"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8105581504953!2d77.1158434753555!3d28.72520617562013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0130db9f1b4d%3A0xc0c6448378602b91!2sRohini%20Sector%206%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1706865000000!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;