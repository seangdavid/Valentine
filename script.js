function nextPage() {
  window.location.href = "yay.html";
}
document.getElementById("noButton").addEventListener("click", function () {
  const button = this; // Reference to the "No" button
  const maxX = window.innerWidth - button.offsetWidth; // Prevent going off-screen (X)
  const maxY = window.innerHeight - button.offsetHeight; // Prevent going off-screen (Y)

  // Generate a random position
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply the new position
  button.style.position = "absolute"; // Ensure it's movable
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});

// const noButton = document.getElementById("noButton");

// noButton.addEventListener("mouseover", () => {
//   createHeart(
//     noButton.offsetLeft + noButton.offsetWidth / 2,
//     noButton.offsetTop + noButton.offsetHeight / 2
//   );
// });

// function createHeart(x, y) {
//   const heart = document.createElement("div");
//   heart.classList.add("heart");
//   heart.style.left = `${x}px`;
//   heart.style.top = `${y}px`;

//   document.body.appendChild(heart);

//   setTimeout(() => {
//     heart.remove(); // Remove the heart after animation completes
//   }, 1000);
// }
