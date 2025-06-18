@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// Typing Animaion
var typed = new Typed('.typing',{
    strings:['','Frontend Web Developer', 'A Tech Consultant'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Back to the Top
const backToTopBtn = document.getElementById("backToTop");
    
// Show button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

// Toggle the 'openSideBar' class on the sidebar
navToggler.addEventListener('click', () => {
  const barIcon = navToggler.querySelector('i');
  barIcon.classList.toggle('fa-bars');
  barIcon.classList.toggle('fa-xmark');
  aside.classList.toggle('openSideBar');
  navToggler.classList.toggle('active'); 
});
// On page load, set correct icon and logo
window.addEventListener('load', () => {
  const barIcon = navToggler.querySelector('i');
  if (barIcon.classList.contains('fa-bars')) {
    barIcon.classList.add('fa-bars');
  } else {
    barIcon.classList.add('fa-xmark');
  }
});

// Smooth Scroll
const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // offset for nav height
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
    window.addEventListener('load', () => {
      // Force scroll to top
      window.scrollTo(0, 0);
  
      // Optional: Remove hash from URL if present
      if (window.location.hash) {
        history.replaceState(null, null, ' ');
      }
    });
   