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
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#03acff] mb-4">
            Choose Your Plan
          </h1>
          <div className="w-24 h-1 bg-[#03acff] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the plan that best fits your business needs and start your journey with Desknet's NEO
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md border ${
                plan.isPremium 
                  ? 'border-[#03acff] ring-2 ring-[#03acff]/20' 
                  : 'border-gray-200'
              } hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Plan Header */}
              <div className="p-6 text-center border-b border-gray-100">
                {plan.isPremium && (
                  <div className="inline-block bg-[#03acff] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    RECOMMENDED
                  </div>
                )}
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.type}
                </h2>
                <div className="text-3xl font-bold text-[#03acff] mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-gray-600">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="text-[#03acff] w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  onClick={() => router.push(plan.redirectTo)}
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
                    plan.isPremium
                      ? 'bg-[#03acff] text-white hover:bg-[#341bca]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-[#03acff] text-white font-medium rounded-md hover:bg-[#341bca] transition-colors duration-200"
          >
            View Requirements
          </button>
        </div>

        {/* Free Trial Note */}
        <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Extended Free Trial Opportunity
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You could enjoy up to <span className="font-semibold text-[#03acff]">2 Months free-trial</span> with Desknet's NEO By Inspire
            if you subscribed or signed a contract with us for 1 year!
          </p>
        </div>
      </div>

      {/* Requirements Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#03acff]">Requirements for Subscription</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            <div className="w-16 h-1 bg-[#03acff] rounded-full mb-4"></div>
            <p className="text-gray-700 mb-4">
              To continue using the platform and unlock its full benefits, here's what you need to prepare to complete your official subscription:
            </p>
            <ul className="space-y-3 mb-6">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <Check className="text-[#03acff] w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-[#03acff] text-white font-medium rounded-md hover:bg-[#341bca] transition-colors duration-200"
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
