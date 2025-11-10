document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll("section, header, footer");
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease";
  });

  const revealOnScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) el.style.opacity = 1;
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

