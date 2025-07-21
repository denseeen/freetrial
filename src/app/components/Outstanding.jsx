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
      image: "path/to/highly-regarded-image.png"
    },
    {
      title: "Dependable Security",
      description: "Tailor log-in methods to fit your security policy. Robust access log management detects unauthorized access and prevents data leaks.",
      image: "path/to/dependable-security-image.png"
    },
    {
      title: "Simple Customization",
      description: "The agile, responsive management system allows setting access privileges and other functions to be easily adjusted for companies of any scale.",
      image: "path/to/simple-customization-image.png"
    },
    {
      title: "Free to Update",
      description: "Enjoy continuous improvements and new features with free updates, ensuring you always have the latest version.",
      image: "path/to/free-to-update-image.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-#03acff"> {/* Section background: white in light mode, dark gray in dark mode */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black dark:text-white leading-tight"> {/* Main text color: black in light mode, white in dark mode */}
          Discover Our <span>Outstanding Features</span> {/* Removed inline style - now inherits parent's text color */}
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
                <h2 className="text-3xl font-bold mb-3 text-black dark:text-white"> {/* Feature title: black in light mode, white in dark mode */}
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"> {/* Description: slightly darker gray in light mode, light gray in dark mode */}
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