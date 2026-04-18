if(!sessionStorage.getItem("fresh")){
    localStorage.removeItem("cart");
    sessionStorage.setItem("fresh","true");
}

const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

let total = 0;

cart.forEach(item => {

const div = document.createElement("div");

div.innerHTML = `
<img src="${item.image}" width="100">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
`;

cartContainer.appendChild(div);

total += Number(item.price);

});

totalElement.innerText = total;