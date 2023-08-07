const categories = document.getElementById('categories');
// pozyskanie elementu ul
const items = categories.querySelectorAll('li.item');
// zdobycie wszystkich li dla rodzica categories
console.log(`Number of categories: ${items.length}`);
// ilość kategorii (li)
items.forEach((item) => {
  const category = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
