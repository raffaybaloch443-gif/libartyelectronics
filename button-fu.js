// j.js
document.addEventListener("DOMContentLoaded", function() {
    // Add to Cart button
    const addCartBtn = document.getElementById("addToCartBtn");
    if(addCartBtn){
        addCartBtn.addEventListener("click", function() {
            const productId = this.getAttribute("data-id");

            // yahan cart me add karne ka logic agar hai
            console.log("Product added:", productId);

            // Cart page par redirect
            window.location.href = "cart.html"; // ya sahi path
        });
    }

    // Product button
    const productBtn = document.getElementById("productBtn");
    if(productBtn){
        productBtn.addEventListener("click", function() {
            const productId = this.getAttribute("data-id");
            console.log("Product clicked:", productId);
            window.location.href = "product.html"; // product page ka path
        });
    }

    // Like button
    const likeBtn = document.getElementById("likeBtn");
    if(likeBtn){
        likeBtn.addEventListener("click", function() {
            const productId = this.getAttribute("data-id");
            console.log("Liked product:", productId);
            // page reload nahi, sirf UI update
            this.innerText = "Liked ❤️";
        });
    }
});
