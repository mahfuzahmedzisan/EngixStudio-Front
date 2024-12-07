
// Brands Slider
const brandsSwiper = new Swiper('.brands .swiper', {
   slidesPerView: "auto",
   loop: true,
   centeredSlides: true,
   speed: 2000,
   allowTouchMove: false,
   disableOnInteraction: false,
   autoplay: {
      delay: 1,
   },
});

// Inro Section Video Play Button

const video = document.getElementById('introVideo');
const videoControlBtn = document.getElementById('videoControlBtn');
const playIcon = document.getElementById('playIcon');

let hideTimeout;

const showControls = () => {
   videoControlBtn.classList.remove('opacity-0');
};

const hideControls = () => {
   hideTimeout = setTimeout(() => {
      videoControlBtn.classList.add('opacity-0');
   }, 2000);
};

const resetHideTimeout = () => {
   clearTimeout(hideTimeout);
   hideControls();
};

// Play/Pause button logic
videoControlBtn.addEventListener('click', () => {
   if (video.paused) {
      video.play();
      video.muted = false;
      video.setAttribute('controls', 'controls');
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
      hideControls();
   } else {
      video.pause();
      video.removeAttribute('controls');
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
      showControls();
      clearTimeout(hideTimeout);
   }
});

// Show controls when the mouse moves over the video
video.addEventListener('mousemove', () => {
   showControls();
   resetHideTimeout();
});

// Hide controls when mouse stops moving over the video
video.addEventListener('mouseleave', () => {
   if (!video.paused) hideControls();
});



// Work Seciton

const caseStudiesContainer = document.getElementById("caseStudiesContainer");
         const loadMoreBtn = document.getElementById("loadMoreBtn");
         const loadLessBtn = document.getElementById("loadLessBtn");
         const cards = Array.from(caseStudiesContainer.children);

         const initialVisible = 2; // Show only the first two cards initially
         let currentlyVisible = initialVisible;

         // Update visibility
         const updateVisibility = () => {
            cards.forEach((card, index) => {
               card.classList.toggle("hidden", index >= currentlyVisible);
            });
         };

         // Show all cards
         loadMoreBtn.addEventListener("click", () => {
            currentlyVisible = cards.length;
            updateVisibility();
            loadMoreBtn.classList.add("hidden");
            loadLessBtn.classList.remove("hidden");
         });

         // Show fewer cards
         loadLessBtn.addEventListener("click", () => {
            currentlyVisible = initialVisible;
            updateVisibility();
            loadLessBtn.classList.add("hidden");
            loadMoreBtn.classList.remove("hidden");
         });

         // Initialize
         updateVisibility();