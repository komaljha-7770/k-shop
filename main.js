// ==========================================
// K-Shop - Home Page Logic (main.js)
// ==========================================

function handleHomeSearch(event) {
    // Check karein ki user ne 'Enter' key dabayi hai ya nahi
    if (event.key === "Enter") {
        let query = document.getElementById('home-search').value;

        if (query !== "") {
            // EncodeURIComponent se special characters handle ho jate hain
            // Ye line user ko product.html par bhej degi aur saath mein search query bhi le jayegi
            window.location.href = "product.html?search=" + encodeURIComponent(query);
        }
    }
}

// Home page par bhi cart count dikhane ke liye (agar aapne header mein id="cart-count" diya hai)
window.addEventListener('load', () => {
    let cartCount = parseInt(sessionStorage.getItem('cartValue')) || 0;
    let countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerHTML = cartCount;
    }
});