// Animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

  // Appear on Scroll
  document.querySelectorAll('.appear-on-scroll').forEach(element => {
    observer.observe(element);
  });

  document.querySelectorAll('.appear-on-scroll-two').forEach(element => {
    observer.observe(element);
  });

  document.querySelectorAll('.appear-on-scroll-three').forEach(element => {
    observer.observe(element);
  });

  // Slide in From Left
  document.querySelectorAll('.slide-in-left').forEach(element => {
    observer.observe(element);
  });


// Toggle Accordion Plus/Minus Signs
const accordionHeader = document.querySelectorAll('.accordion-header');

accordionHeader.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('is-open'); // turn plus-sign into minus-sign 
  })
})

// Clear Form After Submission
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
      form.reset();
  }
}

// Add NavBar background color on scroll
const navBar = document.querySelector('.navbar-home');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.classList.add('scrolled');
  } else if (window.scrollY <=50) {
    navBar.classList.remove('scrolled');
  }
});

// Add dark background overlay on scroll past hero
window.addEventListener('scroll', () => {
  const bgOverlay = document.querySelector('.overlay');
  const newOpacity = Math.min(window.scrollY / 500, 0.75);
  bgOverlay.style.opacity = newOpacity;  
});

// If NavBar background is transparent and user clicks on toggle button, make background black

const screenWidth = screen.width;
const toggle = document.querySelector('.toggle-icon');

toggle.addEventListener('click', () => {
  if (window.scrollY <= 50 && screenWidth <= 1200) {
    navBar.classList.add('scrolled');
  }
}); 

// On Click, rotate Chevron arrow (Navbar Gallery dropdown menu on mobile)
document.addEventListener('DOMContentLoaded', () => {
    const mobileDropdown = document.querySelector('.about-toggle-mobile');

    mobileDropdown.addEventListener("click", () => {
        const chevron = document.querySelector('.bi-chevron-right');
        chevron.classList.toggle('chevron-rotate');
    })
})