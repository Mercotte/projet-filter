import { products } from './products.js';

let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts
    .map((produit) => {
      const { id, title, compagny, image, price } = produit;
      return `<article class="product">
          <img class ="product-img" src= ${image}/>
          <footer>
            <h5 product-name="nom">${title}</h5>
            <span product-price="prix">${price} </span>
          </footer>
        </article>`;
    })

    .join('');
};
displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value.toLowerCase();

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });

  displayProducts();
});

const companiesHtml = document.querySelector('.companies');
console.log(companiesHtml);
const displayButtons = () => {
  const button = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  companiesHtml.innerHTML = button
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};
displayButtons();

companiesHtml.addEventListener('click', (event) => {
  const element = event.target;
  console.log(element.dataset);
  if (element.classList.contains('company-btn')) {
    if (element.dataset.id === 'all') {
      console.log('dans le all');
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        console.log('dans le reste');
        return product.company === element.dataset.id;
      });
    }
  }
  searchInput.value = '';
  displayProducts();
});
