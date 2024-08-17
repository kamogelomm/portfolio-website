//scrollEffect

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".title").forEach((title) => {
  gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 1,
    },
    {
      letterSpacing: 0,
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      ScrollTrigger: title,
    }
  );
});

gsap.utils.toArray(".p").forEach((p) => {
  gsap.fromTo(
    p,
    {
      opacity: 0,
      x: 150,
      skewX: 10,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      ScrollTrigger: p,
    }
  );
});
gsap.utils.toArray(".hr").forEach((hr) => {
  gsap.fromTo(
    hr,
    {
      opacity: 0,
      x: 0,
      skewX: 1,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      ScrollTrigger: hr,
    }
  );
});

//hamburger nav button homepage//
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

//type writer effect homepage//
const typingElement = new Typed(".typing", {
  strings: [" am a Tech Enthusiast."],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});
