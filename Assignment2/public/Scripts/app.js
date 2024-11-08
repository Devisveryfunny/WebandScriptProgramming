// IIFE (Immediately Invoked Function Expression)
(function () {
    // Function that runs when the page has fully loaded
    function Start() {
        console.log("App Started");  // Simple log for testing
    }

    // Attach event listener to the window load event
    window.addEventListener("load", Start);
})();
