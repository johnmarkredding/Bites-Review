document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/v1/items")
    .then(res => res.json())
    .then(console.log);
});



// function displayRestaurants(restaurants) {
//   restaurants.forEach(console.log);
// }
