let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}
updateCartCount();

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = btn.closest('.product-card') || document.querySelector('.modal-content');
    const product = {
      title: card.querySelector('h3').textContent,
      price: card.querySelector('.price') ? card.querySelector('.price').textContent : document.getElementById('modal-price').textContent,
      img: card.querySelector('img').src
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.title} dodano do koszyka!`);
    e.stopPropagation();
  });
});

const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalBuy = document.getElementById('modal-buy');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', e => {
    if(e.target.classList.contains('buy-btn')) return;
    modal.style.display = 'block';
    modalImg.src = card.querySelector('img').src;
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalDesc.textContent = card.querySelector('p').textContent;
    modalPrice.textContent = card.querySelector('.price').textContent;

    modalBuy.onclick = () => {
      const product = { title: modalTitle.textContent, price: modalPrice.textContent, img: modalImg.src };
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product.title} dodano do koszyka!`);
    };
  });
});

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{ threshold:0.2 });

document.querySelectorAll('.product-card').forEach(card => observer.observe(card));
