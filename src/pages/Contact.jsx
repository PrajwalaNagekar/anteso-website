import { Mail, MapPin, Phone } from "lucide-react";

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

                    {/* Form */}
                    <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                        <form className="space-y-5 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="+91..." />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
                                    <option>Select a service...</option>
                                    <option>Quality Assurance (QA)</option>
                                    <option>Equipment Sales</option>
                                    <option>AERB Registration</option>
                                    <option>Repair / Maintenance</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-blue-600 text-white font-bold py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition shadow-md text-sm sm:text-base">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;