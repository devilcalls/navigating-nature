// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Trigger fade-in animation for sections on page load
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`; // Staggered animation
  });

  // Ensure smooth scrolling for anchor links (redundant with CSS but included for compatibility)
  document.querySelectorAll('.sticky-nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});