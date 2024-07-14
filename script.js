// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Add functionality to buttons here
            console.log("Button clicked!");
        });
    });
});

// Add functionality to hero section stats graph
const statsGraph = document.querySelector(".stats-graph");
statsGraph.addEventListener("mouseover", function() {
    // Add functionality to stats graph here
    console.log("Stats graph hovered!");
});