// Function to trigger image animation when button is clicked
document.getElementById("animateButton").addEventListener("click", function() {
    const image = document.getElementById("imageToAnimate");
    
    // Toggle the animation by adding/removing the class
    image.classList.toggle("animate");
});

// Function to save user preferences to localStorage
document.getElementById("savePreferences").addEventListener("click", function() {
    const bgColor = document.getElementById("bgColor").value;
    
    // Store the background color in localStorage
    localStorage.setItem("bgColor", bgColor);
    
    // Apply the background color to the page
    document.body.style.backgroundColor = bgColor;
    
    // Add a class for smooth transition on color change
    document.body.classList.add("transition-bg");
});

// Function to retrieve and apply user preferences on page load
window.onload = function() {
    const savedBgColor = localStorage.getItem("bgColor");
    
    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        document.getElementById("bgColor").value = savedBgColor;
    }
};
