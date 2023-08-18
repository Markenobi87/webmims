const enlaceExpansiones = document.querySelector('#ir-expansiones');
const enlaceNavegacion = document.querySelector('#ir-juego-base'); 
const miSeccion = document.querySelector('#expansiones');
const seccionJuegoBase = document.querySelector('#juego-base');

enlaceNavegacion.addEventListener('click', () => {
  const estiloDisplay = getComputedStyle(miSeccion).display;

  if (estiloDisplay === 'none') {
    miSeccion.style.display = 'block';
  } else {
    miSeccion.style.display = 'none';
  }
});

enlaceExpansiones.addEventListener('click', () => {
    const estiloDisplay = getComputedStyle(miSeccion).display;
  
    if (estiloDisplay === 'none') {
      miSeccion.style.display = 'block';
    } else {
      miSeccion.style.display = 'none';
    }
  });
  
// 




// 
document.addEventListener('DOMContentLoaded', () => {
  const carritoIcono = document.getElementById('cart-button');
  const carritoModal = document.getElementById('cart-modal');
  const closeCartModal = document.querySelector('.close');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalElement = document.getElementById('cart-total');
  const clearCartButton = document.getElementById('clear-cart');
  const checkoutButton = document.getElementById('checkout');
  const carrito = [];

  function updateCartIcon() {
      const cartCount = carrito.reduce((total, item) => total + item.quantity, 0);
      document.getElementById('cart-count').textContent = cartCount;
  }

  function updateCartModal() {
      cartItemsList.innerHTML = '';
      let cartTotal = 0;

      carrito.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
          cartItemsList.appendChild(listItem);
          cartTotal += item.price * item.quantity;
      });

      cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
  }

  function addToCart(name, price) {
      const existingItem = carrito.find(item => item.name === name);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          carrito.push({ name, price, quantity: 1 });
      }

      updateCartIcon();
  }

  const carritoBtns = document.querySelectorAll('.carrito-btn');
  carritoBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          const productCard = btn.closest('.product-card');
          const name = productCard.querySelector('.product-title').textContent;
          const price = parseFloat(productCard.querySelector('.precio-hidden').getAttribute('data-precio'));
          addToCart(name, price);
      });
  });

  clearCartButton.addEventListener('click', () => {
      carrito.length = 0;
      updateCartIcon();
      updateCartModal();
  });

  carritoIcono.addEventListener('click', () => {
      updateCartModal();
      carritoModal.style.display = 'block';
  });

  closeCartModal.addEventListener('click', () => {
      carritoModal.style.display = 'none';
  });

  checkoutButton.addEventListener('click', () => {
      alert('¡Compra finalizada! Gracias por tu compra.');
      carrito.length = 0;
      updateCartIcon();
      updateCartModal();
      carritoModal.style.display = 'none';
  });
});
