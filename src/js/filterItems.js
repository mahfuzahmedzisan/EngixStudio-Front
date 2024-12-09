
const filterButtons = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".filter-item");

function handleFilter(event) {
    // Get the clicked button and its data-name
    const selectedButton = event.target;
    const selectedCategory = selectedButton.getAttribute("data-name");

    // Remove active class from all buttons and add to the clicked button
    filterButtons.forEach(btn => btn.classList.remove("filter-btn-active"));
    selectedButton.classList.add("filter-btn-active");

    // Show or hide filter items based on selected category
    let visibleItems = [];
    filterItems.forEach((item, index) => {
        const itemCategories = item.getAttribute("data-id").split(",");

        if (selectedCategory === "all" || itemCategories.includes(selectedCategory)) {
            item.classList.add("show");
            item.style.display = "flex"; // Make the item visible
            visibleItems.push(item);
        } else {
            item.classList.remove("show");
            item.style.display = "none"; // Hide the item
        }
    });

    // Adjust padding for the right-side cards based on screen size
    visibleItems.forEach((item, index) => {
        if (window.innerWidth >= 768) { // Check if screen width is 768px or larger
            // Add padding for right-side cards
            if ((index + 1) % 2 === 0) {
                item.style.paddingTop = "7rem"; // Apply padding on larger screens
            } else {
                item.style.paddingTop = "0"; // Reset padding for left-side cards on larger screens
            }
        } else {
            // For small devices, remove padding
            item.style.paddingTop = "0"; // Set padding to 0 on smaller screens
        }
    });
}

// Attach click event listeners to all filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", handleFilter);
});

// Trigger the "All" filter on page load
document.querySelector('.filter-btn[data-name="all"]').click();
