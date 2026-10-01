import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-12 max-w-4xl mx-auto">
      {/* หัวข้อ Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gray-900 mt-3 rounded-full"></div>
      </div>

      {/* เนื้อหาหลัก: แบ่งสัดส่วนด้วย Grid มินิมอล */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* ข้อความบรรยายตัวตน */}
        <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
          <p>
            Hello! I'm <span className="font-semibold text-gray-900">Vootichote Chammunkong</span>, an ICT student in the International Program at Mahidol University, with a formal minor track specialization in <span className="font-semibold text-gray-900">Software Engineering</span>.
          </p>
          <p>
            I have a strong passion for technical programming, software development, and modern UI/UX design. Whether it's building scalable backend services, crafting interactive frontend applications, or designing clean user experiences, I enjoy solving complex logic and turning creative ideas into functional digital products.
          </p>
        </div>

        {/* กล่องข้อมูลย่อย (Quick Info Card) สไตล์ Minimal */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Quick Info
          </h3>
          
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="block text-gray-400 text-xs">Education</span>
              <span className="font-medium text-gray-900">Mahidol University (ICT)</span>
            </div>
            <div>
              <span className="block text-gray-400 text-xs">Specialization</span>
              <span className="font-medium text-gray-900">Software Engineering Minor</span>
            </div>
            <div>
              <span className="block text-gray-400 text-xs">Focus Areas</span>
              <span className="font-medium text-gray-900">Full-Stack & UI/UX Design</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}