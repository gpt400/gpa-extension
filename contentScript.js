// contentScript.js - Injects instructor ratings on uaconnect.uark.edu

function injectRatings() {
  // Find all elements with ID containing 'MTG_INSTR'
  const instructorElements = document.querySelectorAll('[id^="MTG_INSTR"]');

  instructorElements.forEach(element => {
    // Placeholder: Fetch rating from database (to be implemented)
    const rating = "4.5"; // This will be replaced with actual database call

    // Create a new element to display the rating
    const ratingElement = document.createElement('div');
    ratingElement.textContent = `Rating: ${rating}`;
    ratingElement.style.marginTop = '5px';

    // Inject the rating element after the instructor's name
    element.parentNode.insertBefore(ratingElement, element.nextSibling);
  });
}

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', injectRatings);
