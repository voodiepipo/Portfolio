import React from 'react';

const placeholderExperience = [
  {
    role: "Fintech Software Engineer Intern",
    company: "Globlex Securities",
    location: "CRC Tower, All Seasons Place",
    period: "22 June 2026 — 31 August 2026",
    bullets: [
      "Developed and integrated APIs to execute algorithmic trading orders within a simulated real-market environment.",
      "Engineered an automated system to process CSV trading orders, implementing the TWAP (Time-Weighted Average Price) algorithm for optimal order slicing.",
      "Secured sensitive API keys and trading credentials by implementing environment variables (.env), adhering to strict Fintech security standards.",
      "Built robust fail-safe mechanisms with comprehensive state logging to ensure seamless system recovery and prevent data loss during crashes.",
      "Designed data extraction pipelines to retrieve TFEX portfolio files, calculating critical metrics such as settlement prices, unrealized profit/loss, and buy/sell amounts."
    ],
  },
  {
    role: "Teaching Assistant (English Subject)",
    company: "DST Program",
    location: "Faculty of ICT, Mahidol University",
    period: "3 June 2026 — 8 July 2026",
    bullets: [
      "Collaborated with faculty to design, refine, and prepare course curriculum and instructional materials.",
      "Delivered engaging presentations and actively communicated complex concepts to facilitate student comprehension.",
      "Served as a primary consultant and mentor, guiding students through both individual tasks and collaborative group projects.",
      "Systematically reviewed assignments and maintained a supportive, highly effective learning environment."
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-12 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Work Experience
        </h2>
        <div className="w-12 h-1 bg-gray-900 mt-3 rounded-full"></div>
      </div>

      <div className="space-y-12">
        {placeholderExperience.map((job, index) => (
          <div 
            key={index} 
            className="group relative border-l-2 border-gray-200 pl-8 pb-4 transition-all duration-300 hover:border-gray-900"
          >
            {/* จุดกลมๆ หน้า Timeline (ปรับตำแหน่งให้พอดีกับ pl-8) */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-gray-200 transition-all duration-300 group-hover:bg-gray-900"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-xl font-bold text-gray-900">
                {job.role}
              </h3>
              <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">
                {job.period}
              </span>
            </div>
            
            {/* ชื่อบริษัท */}
            <h4 className="text-base font-semibold text-gray-700">
              {job.company}
            </h4>

            {/* สถานที่ทำงาน พร้อมไอคอน Location */}
            <div className="flex items-center text-sm text-gray-500 mt-1 mb-4">
              <svg 
                className="w-4 h-4 mr-1 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {job.location}
            </div>
            
            {/* รายละเอียดงานแบบ Bullet Points */}
            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-600 leading-relaxed marker:text-gray-400">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}