import myPhoto from '/Users/voodiepipo/Downloads/voodiepipo-portfolio/src/assets/profile.jpg'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center px-6 text-center">
      {/* Profile picture placeholder */}
      {/* Profile picture placeholder */}
{/* Profile picture */}
<div className="h-48 w-48 rounded-full border-4 border-gray-300 mt-10 mb-4 overflow-hidden bg-gray-100 flex items-center justify-center animate-float">
  <img
    src={myPhoto}
    alt="My Profile"
    className="h-full w-full object-cover object-top"
  />
</div>

{/* Name */}
<h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900">
  Vootichote Chammunkong
</h1>

{/* Subtitles */}
<p className="mt-2 text-base text-gray-800">
  ICT Student (Software Engineering Minor)
</p>
<p className="mt-1 text-base text-gray-800">
  Mahidol University
</p>
{/* ปุ่ม Know more about me ทรงวงรีมนๆ */}
<a 
  href="#about" 
  className="mt-20 inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-gray-50"
>
  Know more about me
  <svg className="w-4 h-4 mt-[0px] ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
</a>
    </section>
  );
}

