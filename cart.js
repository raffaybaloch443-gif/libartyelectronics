document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("product");

    // Example product list (ye tumhare products ke hisaab se)
    const products = [
        { id: '101', name: 'Memory Card 128GB', price: 1299, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop' },
        { id: '102', name: 'USB Flash Drive 32GB', price: 699, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop' },
        // Add more products yahan
    ];

    const cartItemsContainer = document.getElementById("cart-items");

    const product = products.find(p => p.id === productId);
    if (product) {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${product.img}" width="100">
            <h3>${product.name}</h3>
            <p>Rs. ${product.price}</p>
        `;
        cartItemsContainer.appendChild(div);
    } else {
        cartItemsContainer.innerHTML = "<p>No product found in cart.</p>";
    }
});
