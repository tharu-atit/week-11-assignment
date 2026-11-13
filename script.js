// ==========================================
// 1. Dark / Light Mode Toggle Switch Logic
// ==========================================
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  // Toggle the 'light-mode' class on the body element
  document.body.classList.toggle('light-mode');
  
  // Update button text and icon depending on current state
  if (document.body.classList.contains('light-mode')) {
    darkModeToggle.textContent = '🌙 Dark Mode';
  } else {
    darkModeToggle.textContent = '☀️ Light Mode';
  }
});

// ==========================================
// 2. Time-Based Greeting & Age/Days Calculations
// ==========================================
let currentHour = new Date().getHours();
let greetingMessage = "";

if (currentHour < 12) {
    greetingMessage = "Good morning";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon";
} else {
    greetingMessage = "Good evening";
}

console.log(`${greetingMessage}! Welcome to Tharu's Portfolio.`);

let birthYear = 2004; // Adjust birth year as needed
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log(`Calculated profile stats: Lived for approximately ${daysLived} days.`);

if (age >= 18) {
    console.log("Visitor status: Adult verified.");
} else {
    console.log("Visitor status: Minor.");
}
