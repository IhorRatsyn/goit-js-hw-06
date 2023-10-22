const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor; // Змінюємо фон body
  colorSpan.textContent = randomColor; // Оновлюємо значення span.color
});
