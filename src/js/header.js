document.addEventListener('DOMContentLoaded', () => {

   const openSidebar = document.querySelectorAll('.openSidebar');
   const closeSidebar = document.querySelectorAll('.closeSidebar');
   const sidebar = document.querySelector('.sidebar'); // Select the sidebar element globally

   // Navbar functionality
   const firstNavbar = document.getElementById('first-navbar');
   const secondNavbar = document.getElementById('second-navbar');
   let lastScrollPosition = 0;

   // Sidebar open/close functionality
   openSidebar.forEach(btn => {
      btn.addEventListener('click', () => {
         sidebar.style.transform = 'translateX(0)'; // Show the sidebar (move to visible position)
         btn.classList.add('hidden'); // Hide the open button
      });
   });

   closeSidebar.forEach(btn => {
      btn.addEventListener('click', () => {
         sidebar.style.transform = 'translateX(100%)'; // Hide the sidebar (move off-screen)
         setTimeout(() => {
            // Show the corresponding openSidebar button after the sidebar closes
            openSidebar.forEach(openBtn => openBtn.classList.remove('hidden'));
         }, 300); // Delay to wait for sidebar transition to finish
      });
   });

   // Scroll event listener for navbar transitions
   window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      // Scrolling down
      if (scrollPosition > 50 && scrollPosition > lastScrollPosition) {
         firstNavbar.classList.remove('navbar-show');  // Hide the first navbar
         firstNavbar.classList.add('navbar-hide');
         secondNavbar.classList.remove('navbar-hide'); // Show the second navbar
         secondNavbar.classList.add('navbar-show');
      }
      // Scrolling up
      else if (scrollPosition < lastScrollPosition && scrollPosition <= 50) {
         firstNavbar.classList.remove('navbar-hide');  // Show the first navbar
         firstNavbar.classList.add('navbar-show');
         secondNavbar.classList.remove('navbar-show');
         secondNavbar.classList.add('navbar-hide');
      }

      // Update last scroll position
      lastScrollPosition = scrollPosition;
   });

});