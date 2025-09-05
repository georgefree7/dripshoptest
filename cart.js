const cartItemsDiv = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartItemsDiv.innerHTML = '';
  if(cart.length === 0) {
    cartEmpty.style.display = 'block';
    return;
  } else {
    cartEmpty.style.display = 'none';
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('product-card');
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>Cena: ${item.price}</p>
      <button class="remove-btn" data-index="${index}">Usuń</button>
    `;
    cartItemsDiv.appendChild(div);
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;
      cart.splice(idx,1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
}

renderCart();
