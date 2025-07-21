"use client";
import React, { useState } from 'react';

export default function Faqs() {
  const faqs = [
    {
      question: "What is Desknet’s NEO By Inspire?",
      answer: "Desknet’s NEO is a high-end Japanese Software Application which you can use as a business collaboration platform for your company. It was developed by NEOJapan Inc. in 1999 in Yokohama, Japan and was introduced in the Philippines in 2021.\n\nDesknet’s NEO By Inspire is the branding of Desknet’s NEO in the Philippines under its collaboration with the Inspire Next Global Inc. It started to be introduced in the Philippines Market in 2024."
    },
    {
      question: "What are the main features included in Desknet’s NEO By Inspire?",
      answer: "Schedule and Calendar Sharing – Keeping everyone synced.\nWebmail and Internal Chat – Making everyone connected.\nApproval Workflows – Lessen the paper cost/use of the company.\nAttendance and Time Tracking – Aside from being time accurate, it is also on-premises.\nShared Folders, Memos, and More!"
    },
    {
      question: "What is the function of AppSuite?",
      answer: "AppSuite is a no-code tool built into Desknet’s NEO that lets you create custom forms, databases, dashboards, and internal business apps, no coding needed. AppSuite can be limitless as it can be used as an alternative for excel."
    },
    {
      question: "Is it available or accessible to any devices?",
      answer: "Yes! Desknet’s NEO By Inspire is available on any device that can be used to access the Internet. An application of Desknet’s NEO By Inspire is also available to download on IOS’ Google Appstore and Android’s Google Playstore."
    },
    {
      question: "I want to know more about Desknet’s NEO By Inspire functions.",
      answer: `For self-taught access of Desknet’s NEO By Inspire tools and functions, you can access the prepared User Manual in this website, you can also watch our ready-made videos on YouTube: Inspire Next Global Inc.
You can keep in-touch with us or send us your inquiries through our email sales@inspirenextglobal.com or dial through 09202260942 / 09992232797.
Want to schedule an introduction or on-boarding discussion? You can send your available schedule and location of your site/company through sales@inspirenextglobal.com.`
    },
    {
      question: "Is Desknet’s NEO By Inspire customizable?",
      answer: "Yes! Desknet’s NEO By Inspire offers extensive portal and UI customization options to match your organization's branding, workflows, and user preferences. You can easily integrate files, presentations, videos, and websites into your environment by converting their links into their embedded form. You can also manually adjust the size of your interface according to your needs."
    },
    {
      question: "What is collaboration software?",
      answer: "It is a tool for realizing smooth communication and efficient workflows within companies and organizations. It specializes in and focuses on easy information sharing, fluid communication, and streamline workflows."
    },
    {
      question: "Where can I pay my subscription fee?",
      answer: "You can pay your subscription fee via our authorized channel partners, making transactions easier, more secure, and accessible through your preferred local providers. You can choose whether you want to pay through BPI, UnionBank, Gcash, and or physical payment (through visiting our main office at 6F Alliance Global Tower, Uptown Mall in BGC, Taguig)."
    },
    {
      question: "How many months is the free-trial that Desknet’s NEO By Inspire offers?",
      answer: "Desknet’s NEO By Inspire is offering 1 Month free-trial. No bank details will be required during the on-boarding process of the free-trial, unlike the other software applications that require it.\n\nYou could enjoy up to 2 Months free-trial with Desknet’s NEO By Inspire if you subscribed or signed a contract with us for 1 year!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to render text with specific links (for the contact FAQ)
  const renderRichAnswer = (answerText) => {
    if (answerText.includes('sales@inspirenextglobal.com')) {
      return (
        <>
          For self-taught access of Desknet’s NEO By Inspire tools and functions, you can access the prepared User Manual in this website, you can also watch our ready-made videos on YouTube:{" "}
          <a href="https://www.youtube.com/@InspireNextGlobalInc" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#03acff' }}>Inspire Next Global Inc.</a>
          <br /><br /> {/* Double line break for paragraph separation */}
          You can keep in-touch with us or send us your inquiries through our email{" "}
          <a href="mailto:sales@inspirenextglobal.com" className="hover:underline" style={{ color: '#03acff' }}>sales@inspirenextglobal.com</a> or dial through{" "}
          <a href="tel:+639202260942" className="hover:underline" style={{ color: '#03acff' }}>09202260942</a> /{" "}
          <a href="tel:+639992232797" className="hover:underline" style={{ color: '#03acff' }}>09992232797</a>.
          <br /><br />
          Want to schedule an introduction or on-boarding discussion? You can send your available schedule and location of your site/company through{" "}
          <a href="mailto:sales@inspirenextglobal.com" className="hover:underline" style={{ color: '#03acff' }}>sales@inspirenextglobal.com</a>.
        </>
      );
    }
    // For other answers, split by newlines for paragraph breaks
    return answerText.split('\n').map((paragraph, pIndex) => (
      <p key={pIndex} className={pIndex > 0 ? "mt-2" : ""}>
        {paragraph}
      </p>
    ));
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 flex justify-between items-center text-lg font-semibold cursor-pointer transition-colors duration-200"
              >
                <h2
                  className={`text-xl font-bold transition-colors duration-200 ${
                    openIndex === index ? 'text-current' : 'text-black dark:text-white'
                  }`}
                  style={{ color: openIndex === index ? '#03acff' : undefined }} // Apply accent color when open
                >
                  {faq.question}
                </h2>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-2 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                  {renderRichAnswer(faq.answer)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}