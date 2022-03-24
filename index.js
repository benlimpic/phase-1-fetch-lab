
const url = 'https://anapioficeandfire.com/api/books'

const fetchBooks = () => {
  fetch(url)
    .then((res) => res.json())
  .then((books) => renderBooks(books))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach((book) => {
    const h2 = document.createElement('h2')
    h2.textContent = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', fetchBooks)
































// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// })
