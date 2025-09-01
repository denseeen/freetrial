export default function Trusted() {
    return (
        <section className="py-24 bg-white w-full">
            <div className="max-w-full mx-auto px-16">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-semibold text-blue-900 mb-8">
                    Trusted by more than 16,000 companies from different industries worldwide
                    </h2>
                </div>
                
                <div className="overflow-hidden">
                    <div className="flex items-center space-x-20 animate-slide" style={{
                        animation: 'slide 25s linear infinite',
                        width: 'max-content'
                    }}>
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/1.png" 
                                    alt="Yazaki Philippine EDS Techno-Service" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/2.png" 
                                    alt="Pilot" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/3.png" 
                                    alt="Company Logo" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/4.png" 
                                    alt="Mitsubishi Estate" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/5.png" 
                                    alt="Company Logo" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/6.png" 
                                    alt="Company Logo" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                    style={{ transform: 'scale(1.4)' }}
                                />
                            </div>
                        </div>
                        
                        {/* Duplicate logos for seamless loop */}
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/1.png" 
                                    alt="Yazaki Philippine EDS Techno-Service" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/2.png" 
                                    alt="Pilot" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/3.png" 
                                    alt="Company Logo" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/4.png" 
                                    alt="Mitsubishi Estate" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/5.png" 
                                    alt="Company Logo" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                        <div className="text-gray-400 hover:text-gray-600 transition-colors text-center">
                            <div className="w-80 h-32 flex items-center justify-center mb-6">
                                <img 
                                    src="/images/6.png" 
                                    alt="Company Logo" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                                    style={{ transform: 'scale(1.4)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}