// script.js
let points = 10000;

const pointsElement = document.getElementById('points');
const transactionAmountElement = document.getElementById('transactionAmount');
const destinationListElement = document.getElementById('destination-list');

// Function to add points on button click
function addPoints() {
  points += 500; // Adding a fixed amount for now
  updatePointsDisplay();
}

// Function to convert transaction amount to points
function convertToPoints() {
  const amount = parseFloat(transactionAmountElement.value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  const pointsEarned = Math.floor(amount / 100000); // Example conversion rate: 100.000 Rp = 1 point
  points += pointsEarned;
  updatePointsDisplay();
  alert(`You earned ${pointsEarned} points!`);
  transactionAmountElement.value = ''; // Clear input
}

// Function to update points display
function updatePointsDisplay() {
  pointsElement.textContent = points.toLocaleString();
}

// Sample data for destinations
const destinations = [
  { name: 'Sarinah Thamrin', description: 'Retail and cultural hub in Jakarta.' },
  { name: 'The Meru Sanur', description: 'Luxury beachfront resort in Bali.' },
  { name: 'Borobudur Temple', description: 'Ancient Buddhist temple.' },
];

// Display destinations
function displayDestinations() {
  destinations.forEach(dest => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${dest.name}</strong>: ${dest.description}`;
    destinationListElement.appendChild(li);
  });
}

displayDestinations(); // Call function to display destinations
