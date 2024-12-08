
// +++++++++++++++++  Brands Slider ++++++++++++++++++
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

// ++++++++++++++++ Inro Section Video Play Button ++++++++++++++++++++

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



// +++++++++++++ Work Seciton +++++++++++++++

document.getElementById('toggle-cards').addEventListener('click', function () {
   const hiddenCards = document.querySelectorAll('.work-card.hide');
   const button = this;

   if (hiddenCards.length > 0) {
      // Show all hidden cards
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      setTimeout(() => {
         hiddenCards.forEach((card) => card.classList.remove('hide'));
      }, 50)
      button.textContent = 'Load Less';
   } else {
      // Hide cards beyond the first 4
      document.querySelectorAll('.work-card:nth-child(n+5)').forEach((card) => card.classList.add('hide'));
      setTimeout(() => {
         document.querySelectorAll('.work-card:nth-child(n+5)').forEach((card) => card.classList.add('hidden'));
      }, 500)
      button.textContent = 'Load More';
   }
});

