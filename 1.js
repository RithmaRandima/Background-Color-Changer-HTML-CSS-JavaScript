const colorLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const backgroundContainer = document.querySelector(".container");
const changerBtn = document.querySelector(".changer-btn");
const colorText = document.querySelector(".change-color");

changerBtn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colorLetters.length);
    hexColor += colorLetters[randomNumber];
  }
  backgroundContainer.style.backgroundColor = hexColor;
  colorText.innerHTML = hexColor;
});

// console.log(hexColor);
