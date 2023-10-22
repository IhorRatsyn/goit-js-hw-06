const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.getElementById("ingredients");

const fragment = document.createDocumentFragment(); // Створюємо фрагмент

ingredients.forEach(ingredient => {
  const li = document.createElement("li"); // Створюємо новий <li> елемент
  li.textContent = ingredient; // Встановлюємо текстовий вміст для <li>
  li.classList.add("item"); // Додаємо клас "item" до <li>
  fragment.appendChild(li); // Додаємо <li> до фрагменту
});

ulIngredients.appendChild(fragment); // Вставляємо фрагмент з усіма <li> у список ul#ingredients
