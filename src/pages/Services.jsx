const Services = () => {
    const services = [
        { title: "Radiation Safety Audit", desc: "Detailed leakage tests and safety surveys for hospitals and clinics." },
        { title: "QA Testing", desc: "Performance testing for X-Ray, CT Scan, Cath Lab, and Mammography units." },
        { title: "Calibration Services", desc: "Precision calibration to ensure diagnostic accuracy and equipment longevity." },
        { title: "AMC / CMC Support", desc: "Annual Maintenance Contracts to keep your medical infrastructure running 24/7." },
        { title: "AERB Consultancy", desc: "End-to-end support for eLORA registration and regulatory documentation." },
        { title: "Equipment Repair", desc: "Component level repair for multi-brand radiology and imaging equipment." },
    ];

    return (
        <div id="services" className="py-12 sm:py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs sm:text-sm">Our Expertise</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Biomedical Services</h2>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group p-6 sm:p-7 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition duration-300 cursor-pointer">
                            <div className="w-12 h-1 bg-blue-200 group-hover:bg-blue-600 transition-colors duration-300 mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition">{service.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-4">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Services;