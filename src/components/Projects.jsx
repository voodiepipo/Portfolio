import React, { useState } from 'react';

const placeholderProjects = [
  {
    title: "WiFi Human Action Detection",
    description:
      "A system designed to detect and classify human activities using WiFi signal patterns. This approach allows for non-intrusive, privacy-preserving motion sensing and behavior analysis in indoor environments.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    link: "#",
  },
  {
    title: "Home WiFi Check",
    description:
      "A network monitoring tool built to analyze home WiFi performance, track connected devices, and troubleshoot connectivity issues. It helps users easily manage and optimize their local network stability.",
    tags: ["Computer Networking", "Python", "Network Analysis"],
    link: "#",
  },
  {
    title: "Mhumsap - Restaurant App",
    description:
      "A mobile application designed for seamless food ordering and restaurant management. Features a modern UI/UX design to enhance the customer experience with intuitive menu navigation and efficient order processing.",
    tags: ["Figma", "UI/UX Design", "React"],
    link: "#",
  },
];

export default function Projects() {
  // สร้าง State สำหรับเก็บข้อมูลโปรเจกต์ที่ถูกคลิกเพื่อแสดง Modal
  const [selectedProject, setSelectedProject] = useState(null);

  // ฟังก์ชันสำหรับปิด Modal
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-16 md:py-24 max-w-5xl mx-auto pl-6 md:pl-12">
      <div className="mb-10 pr-6 md:pr-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </h2>
        <div className="w-12 h-1 bg-gray-900 mt-3 rounded-full"></div>
      </div>

      {/* 1. ส่วนสไลด์ (Carousel Container) */}
      <div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pr-6 md:pr-12"
        style={{ scrollbarWidth: 'none' /* ซ่อน Scrollbar ใน Firefox */ }}
      >
        {/* ซ่อน Scrollbar สำหรับ Chrome/Safari ด้วย CSS Inline */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {placeholderProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col snap-center shrink-0 w-[85vw] sm:w-[400px] rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:border-gray-200 cursor-pointer"
            onClick={() => setSelectedProject(project)} // กดที่การ์ดแล้วเปิด Modal
          >
            <h3 className="font-bold text-gray-900 text-lg mb-2">{project.title}</h3>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 mt-auto">
              <span className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-800">
                Read more
                <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. ส่วน Popup หน้าเต็ม (Modal) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">
          {/* พื้นที่ของ Modal */}
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-[scale-in_0.2s_ease-out]"
          >
            {/* ปุ่มปิด (X) */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* เนื้อหาในหน้าเต็ม */}
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {selectedProject.title}
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              {/* ปุ่มเปิดโปรเจกต์ของจริง */}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                View Live Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}