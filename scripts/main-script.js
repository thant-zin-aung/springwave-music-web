var splide = new Splide(".splide", {
  type: "loop",
  perPage: 8,
  gap: "30px",
  drag: "free",
  snap: false,
  easing: "cubic-bezier(.22,.61,.36,1)",
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 5000,
  speed: 1000,
  pauseOnHover: false,
  breakpoints: {
    1920: {
      perPage: 9,
      gap: "20px",
    },
  },
});

splide.mount();
