/* Part 2: Functions, Scope, Parameters & Return Values */

// Global variable
let animationActive = false;

// Function with parameters & return value
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  animationActive = element.classList.contains(className);
  return animationActive;
}

// Local scope demonstration
function calculateDouble(num) {
  let result = num * 2; // local variable
  return result;
}

/* Part 3: Combining JS + CSS Animations */

// Animate box on button click
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  let isActive = toggleAnimation(box, "box-animate");
  console.log("Animation active:", isActive);
});

// Modal toggle
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");

toggleModalBtn.addEventListener("click", () => {
  toggleAnimation(modal, "show");
});

// Example of reusing function with parameter
console.log("Double of 7 is:", calculateDouble(7));


// Example of reusing function with parameter
console.log("Double of 4 is:", calculateDouble(4));
