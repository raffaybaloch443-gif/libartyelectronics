document.addEventListener("DOMContentLoaded", function() {

    // Add to Cart buttons
    document.querySelectorAll("[id^='addToCartBtn']").forEach(function(btn){
        btn.addEventListener("click", function(){
            const productId = this.getAttribute("data-id");
            console.log("Product added:", productId);

            // Cart page par redirect with product id
            window.location.href = "cart.html?product=" + productId;
        });
    });

    // Product buttons
    document.querySelectorAll("[id^='productBtn']").forEach(function(btn){
        btn.addEventListener("click", function(){
            const productId = this.getAttribute("data-id");
            console.log("Product clicked:", productId);

            // Product page par redirect
            window.location.href = "product.html?product=" + productId;
        });
    });

    // Like buttons
    document.querySelectorAll("[id^='likeBtn']").forEach(function(btn){
        btn.addEventListener("click", function(){
            const productId = this.getAttribute("data-id");
            console.log("Liked product:", productId);

            // Page reload nahi, sirf UI update
            this.innerText = "Liked ❤️";
        });
    });

});
// cart.js
document.addEventListener("DOMContentLoaded", function(){
    const cartItemsContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.img}" width="100">
            <h3>${item.name}</h3>
            <p>Rs. ${item.price}</p>
        `;

        cartItemsContainer.appendChild(div);
    });
});
