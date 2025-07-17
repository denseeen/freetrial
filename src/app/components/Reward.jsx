import React from 'react';
import { Star, Award, Users, Trophy, Heart, Globe } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-800 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Header */}
      <header className="w-full flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-black mb-4 animate-fade-in">
          Our Achievements
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
          Celebrating milestones and recognition that drive our innovation and commitment to excellence.
        </p>
      </header>

      {/* Achievements Section */}
      <section className="w-full max-w-6xl flex flex-col items-center space-y-12 mx-auto">

        {/* Ribbon Card */}
        <div className="bg-white flex flex-col items-center pt-8 pb-8 px-8 rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out w-full max-w-3xl text-center border-t-4 border-blue-500 animate-slide-in-top">
          <div className="w-16 h-16 bg-blue-500 rounded-full shadow-lg flex items-center justify-center mb-4">
            <Trophy className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 mb-3">
            BestSoftware 2025 Top 100
          </h2>
          <p className="text-lg text-gray-600">
            Recognized as a Leading Innovator in business software solutions
          </p>
        </div>

        {/* Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {/* Customer Satisfaction */}
          <div className="bg-white flex flex-col items-center pt-8 pb-6 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-blue-400 animate-slide-in-left">
            <div className="w-16 h-16 bg-blue-400 rounded-full shadow-lg flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-3">
              Rank No.1
            </h2>
            <p className="text-md text-gray-600 mb-4 flex-grow">
              in Customer Satisfaction in the groupware and business chat category (2018-2023)
            </p>
            <div className="text-blue-500 text-sm font-medium">Nikkei Computer</div>
          </div>

          {/* Users Worldwide */}
          <div className="bg-white flex flex-col items-center pt-8 pb-6 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-blue-500 animate-slide-in-top">
            <div className="w-16 h-16 bg-blue-500 rounded-full shadow-lg flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-3">
              5 Million+ Users
            </h2>
            <p className="text-md text-gray-600 mb-4 flex-grow">
              Worldwide adoption across SMEs, enterprises, and government agencies
            </p>
            <div className="text-blue-500 text-sm font-medium">Global Reach</div>
          </div>

          {/* Best in Japan */}
          <div className="bg-white flex flex-col items-center pt-8 pb-6 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-blue-600 animate-slide-in-right">
            <div className="w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-3">
              Best in Japan 2025
            </h2>
            <p className="text-md text-gray-600 mb-4 flex-grow">
              Recognized as top business software with excellence in innovation
            </p>
            <div className="text-blue-600 text-sm font-medium">Tokyo Stock Exchange</div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="mt-16 text-center max-w-4xl mx-auto p-8 animate-fade-in delay-500 bg-gray-50 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Our Journey to Excellence
        </h2>
        <div className="space-y-6 text-left">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4 text-blue-500">
              <Star className="w-5 h-5" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ranked No. 1 in Customer Satisfaction in the groupware and business chat category by Nikkei Computer for six consecutive years (2018–2023).
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4 text-blue-500">
              <Globe className="w-5 h-5" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over 5 million users worldwide as of May 2025, spanning SMEs, large enterprises, government agencies, educational institutions, and local governments.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4 text-blue-500">
              <Trophy className="w-5 h-5" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hailed as one of the Best Software in Japan 2025, listed on the Section of the Tokyo Stock Exchange.
            </p>
          </div>
        </div>
      </section>

      {/* Tailwind CSS + Font + Animations */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInTop {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-in-top {
          animation: slideInTop 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default App;
