const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

revealOnScroll();
window.addEventListener("scroll", function() {

  // NAV SHADOW
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  revealOnScroll();

});
// หยุด floating เมื่อเริ่ม scroll
const profileImg = document.querySelector('.profile-img');


window.addEventListener('scroll', () => {
  if (profileImg) {
    profileImg.style.animation = 'none';
  }
});

