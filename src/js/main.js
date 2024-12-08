import Swiper from '../../vendor/js/swiper-bundle.min.js';

document.addEventListener('DOMContentLoaded', () => {


   // +++++++++++++++++  Brands Slider ++++++++++++++++++
   const brandsSwiper = new Swiper('.brands .swiper', {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      speed: 3000,
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



   // Service Section

   const serviceSwiper = new Swiper('.service-cards .swiper', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      speed: 2000,
      autoplay: {
         delay: 5000,
      },
      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },
   });

   // Testimonials Section


   // Get all testimonialcontents and avatars
   const testimonialContents = document.querySelectorAll('.testimonial');
   const avatars = document.querySelectorAll('.testimonial-img');

   const showTestimonial = (id) => {
      testimonialContents.forEach((testimonial) => {
         if (!testimonial.classList.contains('hidden')) {
            testimonial.classList.add('animate-slide-out');
            testimonial.classList.remove('animate-slide-in');
            setTimeout(() => testimonial.classList.add('hidden'), 500);
         }
      });

      const activeTestimonial = document.getElementById(id);
      if (activeTestimonial) {
         setTimeout(() => {
            activeTestimonial.classList.remove('hidden');
            activeTestimonial.classList.add('animate-slide-in');
            activeTestimonial.classList.remove('animate-slide-out');
         }, 500); 
      }
   };

   avatars.forEach((avatar) => {
      avatar.addEventListener('click', () => {
         const targetId = avatar.getAttribute('data-target'); // Get the target testimonial ID
         showTestimonial(targetId); 
         
         avatars.forEach((thumb) => {
            thumb.classList.remove('active');
         });

         avatar.classList.add('active');
      });
   });


});
