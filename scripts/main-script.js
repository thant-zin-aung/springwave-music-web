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
      perPage: 7,
      gap: "20px",
    },
    1366: {
      perPage: 6,
      gap: "15px",
    },
  },
});

splide.mount();
