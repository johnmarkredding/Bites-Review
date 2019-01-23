

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/v1/restaurants")
    .then(res => res.json())
    .then(displayRestaurants);
});



function displayRestaurants(restaurants) {
  restaurants.forEach(console.log);
}
