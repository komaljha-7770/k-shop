
const filterButtons = document.querySelectorAll(".filter-buttons button");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
button.addEventListener("click", () => {

const filter = button.getAttribute("data-filter");

products.forEach(product => {

if (filter === "all") {
product.style.display = "block";
}
else if (product.getAttribute("data-category") === filter) {
product.style.display = "block";
}
else {
product.style.display = "none";
}

});

});
});

//add to card


// let cart = [];

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
button.addEventListener("click", () => {

let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
const card = button.parentElement;

const name = card.querySelector("h3").innerText;
const price = card.querySelector(".price").innerText;
const image=card.querySelector("img").src;

const product = {
name: name,
price: price,
image:image
};

cart.push(product);
sessionStorage.setItem("cart",JSON.stringify(cart));
// console.log(cart);

alert("Added to Cart");
// window.location.href="cart.html";

});
});