import { Award, ShieldCheck, Stethoscope, Zap } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
            title: "Quality Assurance",
            desc: "Complete QA testing for Radiology Equipment as per strict AERB guidelines."
        },
        {
            icon: <Award className="w-8 h-8 text-teal-600" />,
            title: "AERB Compliance",
            desc: "Expert consultancy for Registration, Licensing, and Radiation Safety."
        },
        {
            icon: <Zap className="w-8 h-8 text-amber-500" />,
            title: "Fast Support",
            desc: "Regional Service Offices in Delhi, Bangalore, Hyderabad, and Kolkata."
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-indigo-600" />,
            title: "Equipment Sales",
            desc: "Providing high-quality Fixed, Mobile, and Portable X-Ray machines."
        }
    ];

    return (
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Choose Anteso?</h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        We bridge the gap between advanced technology and patient safety with our certified biomedical engineering solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                            <div className="bg-gray-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Features;