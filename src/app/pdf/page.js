import React from 'react';

export default function PdfCardGrid() {
  // Generate 14 placeholder PDF data objects
  const pdfsData = [
    {
      id: 1,
      title: "Case Study: Retail Sector",
      description: "How Desknet's NEO empowered a leading retail chain.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 2,
      title: "Product Brochure 2024",
      description: "Our latest product offerings and features.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 3,
      title: "Technical Specifications Guide",
      description: "Detailed technical documentation for integration.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 4,
      title: "Service Level Agreement (SLA)",
      description: "Our commitment to service quality and uptime.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 5,
      title: "Security Whitepaper",
      description: "Learn about our robust security protocols.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 6,
      title: "User Manual: Advanced Features",
      description: "Comprehensive guide for power users.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 7,
      title: "API Documentation V2.0",
      description: "Instructions for integrating with our API.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 8,
      title: "GDPR Compliance Statement",
      description: "Our commitment to data privacy regulations.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 9,
      title: "Annual Report 2023",
      description: "A summary of our achievements and financials.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 10,
      title: "Partnership Program Guide",
      description: "Information for potential partners.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 11,
      title: "Webinar Series: Future of Work",
      description: "Summary of our thought leadership series.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 12,
      title: "Pricing & Plans Overview",
      description: "Detailed breakdown of our subscription tiers.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 13,
      title: "Implementation Checklist",
      description: "Step-by-step guide for successful deployment.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
    {
      id: 14,
      title: "Careers Brochure",
      description: "Explore opportunities to join our team.",
      pdfUrl: "https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black dark:text-white">
          Our Comprehensive Resources
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {pdfsData.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl p-6 text-center transform transition-transform duration-300 hover:scale-105"
            >
              {/* PDF Icon */}
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16 mx-auto"
                  style={{ color: '#03acff' }} // Primary accent blue for the icon
                >
                  <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9.75a3 3 0 0 0-3-3h-8.25a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h8.25ZM10.5 7.5H18a2.25 2.25 0 0 1 2.25 2.25v6.75a2.25 2.25 0 0 1-2.25 2.25h-7.5a.75.75 0 0 0-.75.75v.75a.75.75 0 0 1-1.5 0V21a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75v.75a.75.75 0 0 1-1.5 0V21A.75.75 0 0 0 0 20.25v-1.5A.75.75 0 0 0 .75 18H3a.75.75 0 0 0 .75-.75V9.75a3 3 0 0 1 3-3h3.75a.75.75 0 0 0 0-1.5H6.75a4.5 4.5 0 0 0-4.5 4.5v6.75a4.5 4.5 0 0 0 4.5 4.5h8.25a4.5 4.5 0 0 0 4.5-4.5V9.75a4.5 4.5 0 0 0-4.5-4.5h-8.25a.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {pdf.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {pdf.description}
              </p>

              {/* Button to View/Download PDF */}
              <a
                href={pdf.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-white text-md font-semibold rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 hover:shadow-lg"
                style={{
                  backgroundColor: '#03acff', // Primary accent blue for button background
                  '--tw-ring-color': '#03acff', // Ring color for focus state
                }}
              >
                {/* Download Wow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 15.75h3.75a.75.75 0 0 0 0-1.5H12.75a.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                View PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}