'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

export default function PlanningPage() {
  const router = useRouter();

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
      buttonColor: '#03acff',
      isTrial: true,
      redirectTo: '/free-trial',
    },
    {
      type: "BASIC ACCOUNT",
      price: "₱200",
      description: "Ideal for fundamental system operations.",
      features: [
        "Facility Reservation",
        "Visitors Management",
        "Document Management",
        "Project Management",
        "Inventory",
        "Cabinet",
        "Safety Confirmation",
        "1GB per account",
        "Cloud status (shareable)",
        "Small to medium Enterprise",
      ],
      buttonText: "Choose Basic",
      buttonColor: '#03acff',
      redirectTo: '/basic',
    },
    {
      type: "PREMIUM ACCOUNT",
      price: "₱360",
      description: "Highly recommended for a fully paperless operational system.",
      features: [
        "Facility Reservation",
        "Visitors Management",
        "Workflow",
        "Circulations/Report",
        "Project Management",
        "Safety Confirmation",
        "AppSuite",
        "1GB per account",
        "Cloud status (shareable)",
        "Small to Large Enterprise",
      ],
      buttonText: "Go Premium",
      buttonColor: '#341bca',
      isPremium: true,
      redirectTo: '/premium',
    },
  ];

  return (
    <section
      className="py-16 px-4 min-mid-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/images/background.png')" }}
      
    >
           
      <div className="max-w-6xl mx-auto text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 ">
          Choose Your <span style={{ color: '#03acff' }}>Perfect Plan</span>
        </h1>
         <div className="text-center mt-12 text-black mb-10">
          <p>
            You could enjoy up to 2 Months free-trial with Desknet’s NEO By Inspire
            if you subscribed or signed a contract with us for 1 year!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative  bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col items-center text-center text-white transition-all duration-300 transform hover:scale-105 ${
                plan.isPremium ? 'border-2 border-solid' : ''
              }`}
              style={plan.isPremium ? { borderColor: '#03acff' } : {}}
            >
              {/* Arrow Price Tag */}
              <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold py-2 px-6 rounded-md shadow-lg"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)',
                  width: '120px',
                  textAlign: 'center',
                }}
              >
                {plan.price}
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">{plan.type}</h2>
              <p className=" mb-6 text-white">{plan.description}</p>

              <ul className="text-left w-full space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm ">
                    <Check className="text-[#22c55e] w-4 h-4 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push(plan.redirectTo)}
                className="mt-auto px-8 py-3 text-white text-lg font-semibold rounded-full shadow-lg w-full transition-colors duration-300"
                style={{ backgroundColor: plan.buttonColor }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Free Trial Note */}
       
      </div>
    </section>
  );
}
