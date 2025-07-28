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
    // Changed background to bg-white. Removed dark mode background as it's meant to be consistently white.
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main heading: text-gray-900 ensures readability on white. Removed dark:text-white. */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 leading-tight">
          Discover Our <span className="text-blue-600">Outstanding Features</span> {/* Added a consistent highlight color */}
        </h1>

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
                  className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                {/* Feature title: text-gray-900 for readability on white. Removed dark:text-white. */}
                <h2 className="text-3xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h2>
                {/* Description: text-gray-700 for readability on white. Removed dark:text-gray-300. */}
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