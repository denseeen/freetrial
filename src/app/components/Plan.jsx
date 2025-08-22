'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X } from 'lucide-react';

export default function PlanningPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      redirectTo: '/form',
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

  const requirements = [
    "Contact Person Details",
    "Signed Subscription Contract",
    "Signed Terms and Conditions",
    "BIR Certificate of Registration (Form 2023)",
    "Company TIN Number",
    "Any Additional Agreements (if applicable)"
  ];

          return (
      <section className="py-16 px-4 bg-[#F3F8FE] min-h-screen flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2">
              Choose Your <span className="text-black">Perfect Plan</span>
            </h1>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6"></div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#03acff] rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 ${
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

              <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">{plan.type}</h2>
              <p className="mb-6 text-gray-700">{plan.description}</p>

              <ul className="text-left w-full space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <Check className="text-[#0b5727] w-4 h-4 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push(plan.redirectTo)}
                className="mt-auto px-8 py-3 text-black text-lg font-semibold rounded-full bg-white hover:bg-blue-600 shadow-lg w-full transition-colors duration-300"
               
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Requirements Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-[#03acff] text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 text-lg"
          >
            View Requirements
          </button>
        </div>

        {/* Free Trial Note */}
        <div className="text-center mt-8 text-black">
          <p>
            You could enjoy up to 2 Months free-trial with Desknet's NEO By Inspire
            if you subscribed or signed a contract with us for 1 year!
          </p>
        </div>
      </div>

              {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-[#03acff]">Requirements for Subscription</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="w-16 h-1 bg-[#03acff] rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              To continue using the platform and unlock its full benefits, here's what you need to prepare to complete your official subscription:
            </p>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <Check className="text-[#03acff] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-[#03acff] text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
