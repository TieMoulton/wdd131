// Product array of objects
const products = [
    { id: 'prod1', name: 'Laptop' },
    { id: 'prod2', name: 'Smartphone' },
    { id: 'prod3', name: 'Tablet' },
    { id: 'prod4', name: 'Smartwatch' },
    { id: 'prod5', name: 'TV' }
];

// Populate the product dropdown dynamically
document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
});

// Counter for form submissions using localStorage
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
});
