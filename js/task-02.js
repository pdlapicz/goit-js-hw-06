const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const list = document.getElementById('ingredients');
// pozyskanie UL z HTML
const liElements = ingredients.map((ingredient) => {
  // wydobycie elementów z kolekcji
  const li = document.createElement('li');
  // utworzenie elementu li
  li.textContent = ingredient;
  // zawartość kolejnego li
  li.classList.add('item');
  // dodanie
  return li;
});

list.append(...liElements);

// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
