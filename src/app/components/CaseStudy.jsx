import React from 'react';

// This is the component that will be imported as "CaseStudy" in your page.js
export default function CaseStudy() { // Changed function name to CaseStudy
  const industries = [
    {
      name: "Manufacturing Industry",
      companies: [
        { name: "Philippines EDS Techno-Service, Inc.", users: "800 Users" },
        { name: "Pilot", users: "1,500 Users", subscription: "6 Months subscription" },
      ]
    },
    {
      name: "Travel Industry",
      companies: [
        { name: "H.I.S Travel Corporation", users: "36 Users", subscription: "3 Months subscription" },
      ]
    },
    {
      name: "Government Industry",
      companies: [
        { name: "Kobe City", users: "20,166 Users", subscription: "2 Years subscription" },
        { name: "Ohda City Hall", users: "570 Users" },
      ]
    },
    {
      name: "Construction Industry",
      companies: [
        { name: "Sankei Construction Co., Ltd.", users: "300 Users", subscription: "3 Months subscription" },
        { name: "Mitsubishi Estate Home", users: "500 Users" },
      ]
    },
    {
      name: "Retail Industry",
      companies: [
        { name: "Nakaniwa Tokei", users: "25 Users", subscription: "6 Months subscription" },
        { name: "Life Corporation", users: "6,000 Users", subscription: "20 Months subscription" },
      ]
    },
    {
      name: "Logistics Industry",
      companies: [
        { name: "Zero", users: "750 Users" },
        { name: "Morikuni", users: "70 Users", subscription: "3 Months subscription" },
      ]
    },
    {
      name: "Healthcare Industry",
      companies: [
        { name: "Seirei Welfare Corporation", users: "14,000 Users" },
        { name: "Eijukai Medical Corporation", users: "190 Users" },
      ]
    },
    {
      name: "Restaurant Industry",
      companies: [
        { name: "Aleph", users: "600 Users" },
        { name: "Wins Japan", users: "70 Users", subscription: "6 Months" },
      ]
    },
    {
      name: "University Industry",
      companies: [
        { name: "Tokyo Healthcare University", users: "2,500 Users" },
        { name: "Musashino University", users: "1,345 Users", subscription: "10 Months" },
      ]
    },
    {
      name: "IT Industry",
      companies: [
        { name: "Inet Corporation", users: "1,700 Users" },
        { name: "System Approach", users: "25 Users" },
      ]
    },
    {
      name: "Non-Government Unit (NGO) Industry",
      companies: [
        { name: "Osaka Water Comprehensive Service", users: "300 Users" },
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">CASE STUDIES</h1>

        

        <p className="text-lg mb-10 text-center text-gray-800 dark:text-gray-200">
          These are some of the companies from different industries that use Desknet’s NEO:
        </p>

        <div className="space-y-12"> {/* Spacing between industry sections */}
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2
                className="text-2xl font-bold mb-5 pb-2 border-b-2 border-current"
                style={{ color: '#03acff' }} // Apply primary accent blue
              >
                {industry.name}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {industry.companies.map((company, compIndex) => (
                  <li key={compIndex} className="p-3 bg-white dark:bg-gray-900 rounded-md shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {company.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Users: {company.users}
                      {company.subscription && `, Subscription: ${company.subscription}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PDF Link */}
        <div className="text-center mt-16">
          <a
            href="https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 hover:shadow-xl"
            style={{
              backgroundColor: '#03acff', // Primary accent color for button background
              '--tw-ring-color': '#03acff', // Ring color for focus state
            }}
          >
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M11.25 11.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-6.75Z" />
                <path fillRule="evenodd" d="M3.75 6.75a3 3 0 0 1 3-3h7.125c.708 0 1.395.208 1.987.584L21.75 9.75v5.25c0 1.654-1.346 3-3 3h-2.25a.75.75 0 0 0 0 1.5H18c2.485 0 4.5-2.015 4.5-4.5V9.477c0-.98-.363-1.917-1.026-2.624L15.378 3.62A2.25 2.25 0 0 0 13.625 3h-6.875a1.5 1.5 0 0 0-1.5 1.5v1.97l-.73-.219A.75.75 0 0 0 3 6.75v1.5c0 .207.168.375.375.375H7.5a.75.75 0 0 1 0 1.5H3.375A.375.375 0 0 1 3 10.5v1.5c0 .207.168.375.375.375H7.5a.75.75 0 0 1 0 1.5H3.375A.375.375 0 0 1 3 13.5v1.5c0 .207.168.375.375.375H7.5a.75.75 0 0 1 0 1.5H3.375A.375.375 0 0 1 3 16.5V18a3 3 0 0 0 3 3h1.5a.75.75 0 0 0 0-1.5H6a1.5 1.5 0 0 1-1.5-1.5V6.75ZM6.75 7.5h.008v.008H6.75V7.5ZM6.75 10.5h.008v.008H6.75V10.5ZM6.75 13.5h.008v.008H6.75V13.5ZM6.75 16.5h.008v.008H6.75V16.5Z" clipRule="evenodd" />
              </svg>
              Compilation of Case Studies in PDF Format
            </span>
          </a>
        </div>

        {/* Citation Note */}
        <div className="text-sm italic text-gray-600 mt-5 dark:text-gray-400 text-center mb-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p className="font-semibold text-sm">
            NEOPhilippine Tech Inc. Case Studies.{" "}
            <a
              href="https://www.dneoph.com/case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors duration-200"
              style={{ color: '#03acff' }} // Apply specific accent blue
            >
              https://www.dneoph.com/case-study
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}