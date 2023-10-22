const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Кількість категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li');
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItems.length}`);
});
