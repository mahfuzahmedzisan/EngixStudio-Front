// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
   // Get all filter buttons and filter items
   const filterButtons = document.querySelectorAll('.filter-btn');
   const filterItems = document.querySelectorAll('.filter-item');

   // Function to filter items based on selected category
   function filterItemsByCategory(category) {
       filterItems.forEach(item => {
           const itemCategories = item.getAttribute('data-id').split(',');
           const content = item.querySelector('.content');

           // Add a small delay before applying the animation for a smoother transition
           if (category === 'all' || itemCategories.includes(category)) {
               // Show the item
               item.classList.remove('hidden');
               content.classList.remove('max-h-0', 'overflow-hidden');
               content.classList.add('max-h-screen', 'overflow-visible');
           } else {
               // Hide the item
               content.classList.remove('max-h-screen', 'overflow-visible');
               content.classList.add('max-h-0', 'overflow-hidden');
               // After the transition is complete, set the item to be fully hidden
               setTimeout(() => {
                   item.classList.add('hidden');
               }, 300);  // Match the transition duration for smooth hide
           }
       });
   }

   // Add event listeners to each filter button
   filterButtons.forEach(button => {
       button.addEventListener('click', function() {
           const category = button.getAttribute('data-name');
           // Highlight the active button
           filterButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
           button.classList.add('bg-blue-500', 'text-white');
           // Filter the items based on the selected category
           filterItemsByCategory(category);
       });
   });

   // Initially show all items when the page loads
   filterItemsByCategory('all');
});
