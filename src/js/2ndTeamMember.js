document.addEventListener('DOMContentLoaded', () => {

   function adjustPadding() {
      const members = Array.from(document.querySelectorAll('#team-grid > div'));
      members.forEach(member => member.style.paddingTop = '0'); // Reset padding

      if (window.innerWidth >= 768) {
         // Apply padding to middle member of each row with 3 members
         members.forEach((member, index) => {
            if (index % 3 === 1) {
               member.style.paddingTop = '4rem';
            }
         });
      } else if (window.innerWidth >= 480) {
         // Apply padding to second member in rows with 2 members
         members.forEach((member, index) => {
            if (index % 2 === 1) {
               member.style.paddingTop = '4rem';
            }
         });
      }
   }

   window.addEventListener('load', adjustPadding);
   window.addEventListener('resize', adjustPadding);

});