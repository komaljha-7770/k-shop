//  if(!sessionStorage.getItem("fresh")){
//     localStorage.removeItem("cart");
//         sessionStorage.setItem("fresh","true"); }

// const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// const cartContainer = document.getElementById("cart-items");
// const totalElement = document.getElementById("total");

// let total = 0;

// cart.forEach(item => {

// const div = document.createElement("div");

// div.innerHTML = `
// <img src="${item.image}" width="100">
// <h3>${item.name}</h3>
// <p>₹${item.price}</p>
// `;

// cartContainer.appendChild(div);

// total += Number(item.price);

// });

// totalElement.innerText = total;

// document.querySelector(".checkout-btn").addEventListener("click", () => {
//   if(cart.length === 0){
//     alert("Cart is empty!");
//   } else {
//     alert("Order placed! Total: ₹" + totalElement.innerText);
//   }
// });





// Function to update the UI and handle listeners
function renderCart() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    
    cartContainer.innerHTML = ""; // Container clear karein
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        
        // Quantity default 1 agar missing hai
        const qty = item.quantity || 1;
        
        div.innerHTML = `
            <img src="${item.image}" width="80">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
            <div class="quantity-controls">
                <button onclick="changeQty(${index}, -1)">-</button>
                <span>${qty}</span>
                <button onclick="changeQty(${index}, 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(div);
        total += Number(item.price) * qty;
    });

    totalElement.innerText = total;
}

// Quantity change karne ka function
window.changeQty = (index, change) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    if(!cart[index].quantity) cart[index].quantity = 1;
    
    cart[index].quantity += change;

    // Agar quantity 0 se kam ho toh item remove kar dein
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

// Checkout Function
document.querySelector(".checkout-btn").addEventListener("click", () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully!");
        sessionStorage.removeItem("cart"); // Cart clear karein
        window.location.href = "home.html"; // Home page par wapas jayein
    }
});

// Initial call
renderCart();


