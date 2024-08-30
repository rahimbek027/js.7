// script.js

document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('productFormContainer').classList.remove('hidden');
});

document.getElementById('hideFormButton').addEventListener('click', function() {
    document.getElementById('productFormContainer').classList.add('hidden');
});

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const imageFile = document.getElementById('image').files[0];
    
    if (name && price && imageFile) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const product = {
                name: name,
                price: price,
                image: event.target.result
            };
            addProductToList(product);
            document.getElementById('productForm').reset();
            document.getElementById('productFormContainer').classList.add('hidden');
        };
        
        reader.readAsDataURL(imageFile);
    } else {
        alert('Barcha maydonlarni to\'ldiring!');
    }
});

function addProductToList(product) {
    const productList = document.getElementById('products');
    
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Narx: ${product.price} so'm</p>
        <img src="${product.image}" alt="${product.name}">
        <button onclick="deleteProduct(this)">O'chirish</button>
    `;
    
    productList.appendChild(productDiv);
}

function deleteProduct(button) {
    const productList = document.getElementById('products');
    productList.removeChild(button.parentElement);
}

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const name = product.querySelector('h2').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
