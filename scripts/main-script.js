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

let BASE_API_URL = "http://localhost:8081";
let specialContainer = document.querySelector(".special-track-list-container");
fetch(`${BASE_API_URL}/api/deezer/tracks/top`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      let track = data.data[0]; // Assuming you want the first track for the special section
      specialContainer.innerHTML = `
        <div class="special-track-container">
            <div class="backdrop-artist-name">${track.artist.name}</div>
            <img src="${track.artist.picture_big}" alt="" class="backdrop-artist-image">
            <div class="track-detail-container">
              <div class="track-title">${track.title}</div>
              <div class="track-artist">
                ${track.artist.name} <i class="fa-solid fa-circle" aria-hidden="true"></i>
                <span>120 Millions plays</span>
              </div>
              <div class="button-container">
                <button class="listen-button">
                  Listen Now <i class="fa-solid fa-play" aria-hidden="true"></i>
                </button>
                <button class="save-button">
                  <i class="fa-regular fa-heart" aria-hidden="true"></i>
                </button>
              </div>
              <div class="slide-container">
                <div class="dot-container">
                  <i class="fa-solid fa-circle active" aria-hidden="true"></i>
                  <i class="fa-solid fa-circle" aria-hidden="true"></i>
                  <i class="fa-solid fa-circle" aria-hidden="true"></i>
                  <i class="fa-solid fa-circle" aria-hidden="true"></i>
                  <i class="fa-solid fa-circle" aria-hidden="true"></i>
                </div>
                <div class="arrow-container">
                  <i class="fa-solid fa-chevron-up up-arrow-icon" aria-hidden="true"></i>
                  <i class="fa-solid fa-chevron-down down-arrow-icon" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
      `;
      // data.data.forEach((track) => {
      //   let trackElement = document.createElement("div");
      //   trackElement.innerHTML = `
      //   `;
      //   specialContainer.appendChild(trackElement);
      // });
    }
  })
  .catch((error) => {
    console.error("Error fetching tracks:", error);
  });
