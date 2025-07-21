import React from 'react';

export default function PlanningPage() {
  const plans = [
    {
      type: "FREE TRIAL",
      price: "Free",
      description: "Experience Desknet's NEO By Inspire for a limited time.",
      features: [
        "1 Month Free Trial (No bank details required!)",
        "Enjoy up to 5 core applications",
        "Basic system operations",
        "Limited support access",
      ],
      buttonText: "Start Free Trial",
      buttonColor: '#03acff', // Primary accent blue
      isTrial: true, // Flag for specific trial styling
    },
    {
      type: "BASIC ACCOUNT",
      price: "Php 200",
      description: "Ideal for fundamental system operations.",
      features: [
        "Recommended for Basic System Operations only.",
        "With full access to Basic Tools of NEO / can enjoy up to 26 applications.",
        "Has limited access to customization.",
      ],
      buttonText: "Choose Basic",
      buttonColor: '#03acff', // Primary accent blue
    },
    {
      type: "PREMIUM ACCOUNT",
      price: "Php 360",
      description: "Highly recommended for a fully paperless operational system.",
      features: [
        "Recommended for High System Operations.",
        "Can enjoy up to 27 applications.",
        "With full access to customization.",
        "Unlimited access to AppSuite.",
        "Highly recommended to enjoy fully paperless operational system.",
      ],
      buttonText: "Go Premium",
      buttonColor: '#341bca', // Secondary accent purple for premium
      isPremium: true, // Flag for specific premium styling
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Choose Your <span style={{ color: '#03acff' }}>Perfect Plan</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105
                ${plan.isPremium ? 'border-2 border-solid' : ''}  // Added border-2 and border-solid for width and style
              `}
              // Applied inline style for border color only when it's the premium plan
              style={plan.isPremium ? { borderColor: '#03acff' } : {}}
            >
              {/* Price Tag - replicating the red arrow shape */}
              <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold py-2 px-6 rounded-md shadow-lg"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)', // Arrow shape
                  width: '120px', // Fixed width for consistency
                  textAlign: 'center',
                }}
              >
                {plan.price}
              </div>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-black dark:text-white">
                {plan.type}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                {plan.description}
              </p>

              <ul className="text-left w-full space-y-2 mb-8">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start text-gray-800 dark:text-gray-200">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: '#03acff' }} // Checkmark in accent blue
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="mt-auto px-8 py-3 text-white text-lg font-semibold rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 w-full"
                style={{
                  backgroundColor: plan.buttonColor,
                  '--tw-ring-color': plan.buttonColor,
                  // Hover effect using secondary accent for primary button, or primary for secondary
                  // Note: Inline pseudo-class styles like ':hover' don't work directly in React JSX.
                  // For a functional hover, you'd define custom utility classes in tailwind.config.js
                  // or use a separate CSS file. For example: `hover:bg-blue-700` if blue is defined.
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        {/* Free Trial Note from FAQ section if applicable */}
        <div className="text-center mt-12 text-gray-700 dark:text-gray-300">
          <p>
            You could enjoy up to 2 Months free-trial with Desknet’s NEO By Inspire
            if you subscribed or signed a contract with us for 1 year!
          </p>
        </div>
      </div>
    </section>
  );
}