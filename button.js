const CART_KEY = 'libarty_cart';

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartBadge(){
  const cart = getCart();
  const badge = document.getElementById('cartCount');
  if(badge){
    badge.style.display = cart.length ? 'inline-block' : 'none';
    badge.textContent = cart.length;
  }
}

document.addEventListener('click', function(e){
  if(e.target.classList.contains('add-to-cart')){
    const btn = e.target;

    let cart = getCart();

    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const img = btn.dataset.img;

    const already = cart.find(item => item.id === id);

    if(already){
      already.qty = (already.qty || 1) + 1;
    }else{
      cart.push({
        id,
        name,
        price,
        img,
        qty: 1
      });
    }

    saveCart(cart);
    updateCartBadge();

    alert(name + " cart mein add ho gaya ✅");
  }
});

updateCartBadge();

