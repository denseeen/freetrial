import React from 'react';

export default function Outstanding() {
  const features = [
    {
      title: "An App Selection That Fits",
      description: "A selection of 21 useful apps gives you quick access to the tools you need to streamline your workflow.",
      image: "/images/a.png" // Replace with actual image paths
    },
    {
      title: "Intuitive Interface",
      description: "Our simple, easy-to-understand interface enables a quick start and can be used seamlessly across multiple devices.",
      image: "/images/b.png"
    },
    {
      title: "Highly Regarded",
      description: "A popular choice with customers, our solution is trusted for its reliability and excellent reputation.",
      image: "/images/user.png"
    },
    {
      title: "Dependable Security",
      description: "Tailor log-in methods to fit your security policy. Robust access log management detects unauthorized access and prevents data leaks.",
      image: "/images/secure.png"
    },
    {
      title: "Simple Customization",
      description: "The agile, responsive management system allows setting access privileges and other functions to be easily adjusted for companies of any scale.",
      image: "/images/peps.png"
    },
    {
      title: "Free to Update",
      description: "Enjoy continuous improvements and new features with free updates, ensuring you always have the latest version.",
      image: "/images/update.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F3F8FE] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3C8CDE] mb-2">
            Discover Our <span className="text-[#3C8CDE]">Outstanding Features</span>
          </h1>
          <div className="w-16 h-1 bg-[#3C8CDE] rounded-full mx-auto mb-6"></div>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}