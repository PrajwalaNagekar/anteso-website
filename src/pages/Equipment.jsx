const Equipment = () => {
    const products = ["Fixed X-Ray", "Mobile C-Arm", "CT Scanners", "Mammography", "Dental OPG"];

    return (
        <div id="equipment" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">Supported Modalities</h2>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {products.map((item, idx) => (
                        <span key={idx} className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-slate-700 rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-600 hover:border-blue-600 transition duration-300 cursor-default">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Equipment;
