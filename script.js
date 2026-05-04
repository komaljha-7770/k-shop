
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


//search bar

// Search Functionality for Product Page
function filterProducts() {
    // 1. Search bar se text uthana
    let input = document.getElementById('search-input').value.toLowerCase();
    
    // 2. Saare product cards ko select karna
    // Dhyan dein: Agar aapki card class "product-card" nahi hai toh wahi likhein jo aapne use ki hai
    let cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        // 3. Card ke andar jo <h3> hai (jahan product ka naam hai) use uthana
        let titleElement = card.querySelector('h3');
        
        if (titleElement) {
            let titleText = titleElement.innerText.toLowerCase();

            // 4. Agar type kiya gaya word naam mein hai, toh card dikhao
            if (titleText.indexOf(input) > -1) {
                card.style.display = "block"; // Show
            } else {
                card.style.display = "none"; // Hide
            }
        }
    });
}

//cart page me search ke liye

// --- Pehle aapka purana search function ---
// function filterProducts() {
//     let input = document.getElementById('search-input').value.toLowerCase();
//     let cards = document.querySelectorAll('.product-card');

//     cards.forEach(card => {
//         let title = card.querySelector('h3').innerText.toLowerCase();
//         if (title.indexOf(input) > -1) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }

// // --- AB YAHAN SE NAYA CODE JODIYE (URL logic) ---

window.addEventListener('DOMContentLoaded', () => {
    // 1. URL se query nikalna
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            // 2. Search box mein query bharo
            searchInput.value = searchQuery;
            
            // 3. Filter function ko chalao (Jo upar likha hai)
            filterProducts(); 
        }
    }
});

function filterProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let cards = document.querySelectorAll('.product-card');
    let foundCount = 0; // Match check karne ke liye counter

    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        
        if (title.indexOf(input) > -1) {
            card.style.display = "block";
            foundCount++; // Agar match mila toh count badhao
        } else {
            card.style.display = "none";
        }
    });

    // Message dikhane ka logic
    let messageBox = document.getElementById('no-product-message');
    
    // Agar koi product nahi mila (foundCount == 0)
    if (foundCount === 0) {
        if (!messageBox) {
            // Naya message box banayein agar pehle se nahi hai
            messageBox = document.createElement('div');
            messageBox.id = 'no-product-message';
            messageBox.innerHTML = `<h2 style="text-align:center; color:gray; margin-top:50px;">
                Sorry! No products found for "${input}" 🔍</h2>`;
            document.querySelector('.products').appendChild(messageBox);
        }
    } else {
        // Agar product mil gaya, toh message hata dein
        if (messageBox) {
            messageBox.remove();
        }
    }
}