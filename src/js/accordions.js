const faqItems = document.querySelectorAll('.faq-item');

// Add click event listener to each FAQ button
faqItems.forEach((item, index) => {
   const button = item.querySelector('.faq-question');
   const answer = item.querySelector('.faq-answer');
   const faqIcon = item.querySelector('.faq-icon');

   button.addEventListener('click', () => {
      // Collapse all other FAQ answers
      faqItems.forEach((otherItem, otherIndex) => {
         const otherAnswer = otherItem.querySelector('.faq-answer');
         const otherFaqIcon = otherItem.querySelector('.faq-icon');
         
         if (otherIndex !== index) {
            otherAnswer.style.maxHeight = null; // Collapse the other answers
            otherItem.classList.remove('pb-5'); // Remove padding from the other items
            otherFaqIcon.classList.remove('fa-minus', 'text-t-primary');
            otherFaqIcon.classList.add('fa-plus');
         }
      });

      // Toggle the clicked FAQ answer
      if (answer.style.maxHeight) {
         // Collapse the current answer
         answer.style.maxHeight = null;
         item.classList.remove('pb-5'); // Remove padding when collapsed
         faqIcon.classList.remove('fa-minus', 'text-t-primary');
         faqIcon.classList.add('fa-plus');
      } else {
         // Expand the current answer
         answer.style.maxHeight = `${answer.scrollHeight + 20}px`; // Dynamically set height + padding for smooth transition
         item.classList.add('pb-5'); // Add padding to the entire item when expanded
         faqIcon.classList.remove('fa-plus');
         faqIcon.classList.add('fa-minus', 'text-t-primary');
      }
   });
});

// Initialize the first FAQ item as expanded
const firstAnswer = faqItems[0].querySelector('.faq-answer');
const firstFaqIcon = faqItems[0].querySelector('.faq-icon');
firstAnswer.style.maxHeight = `${firstAnswer.scrollHeight + 20}px`; // Dynamically set height + padding
faqItems[0].classList.add('pb-5'); // Add padding to the first item
firstFaqIcon.classList.remove('fa-plus');
firstFaqIcon.classList.add('fa-minus', 'text-t-primary');
