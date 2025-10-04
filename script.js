let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(li);
  });
}

document.getElementById("checkout").addEventListener("click", async () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const response = await fetch("https://YOUR-BACKEND-URL/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cart })
  });

  const data = await response.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Checkout failed.");
  }
});