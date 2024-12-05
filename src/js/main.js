const openSidebar = document.querySelectorAll('.openSidebar');
const closeSidebar = document.querySelectorAll('.closeSidebar');
const sidebar = document.querySelector('.sidebar'); // Select the sidebar element globally

openSidebar.forEach(btn => {
   btn.addEventListener('click', () => {
      sidebar.classList.remove('translate-x-full'); // Show the sidebar
      btn.classList.add('hidden'); // Hide the open button
   });
});

closeSidebar.forEach(btn => {
   btn.addEventListener('click', () => {
      sidebar.classList.add('translate-x-full'); // Hide the sidebar
      setTimeout(() => {
         // Show the corresponding openSidebar button after the sidebar closes
         openSidebar.forEach(openBtn => openBtn.classList.remove('hidden'));
      }, 300); // Delay to wait for sidebar transition to finish
   });
});