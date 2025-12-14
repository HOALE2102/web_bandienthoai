let filteredProducts = [...products];
let currentProductDetail = null;
let currentViewMode = 'user';

function handleSearch(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    filteredProducts = products.filter(p => p.name.toLowerCase().includes(lowerKeyword) || p.brand.toLowerCase().includes(lowerKeyword));
    
    // Chỉ render lại user view khi tìm kiếm
    if (currentViewMode === 'user') renderUserView();
}
function renderUserView() {
    const container = document.getElementById('userProductList');
    container.innerHTML = '';
    if(filteredProducts.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px;">Không tìm thấy sản phẩm nào.</div>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => showDetail(product);
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${product.image}" class="card-img" alt="${product.name}">
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <div class="card-price">${formatMoney(product.price)}</div>
            </div>
        `;
        container.appendChild(card);
    });
}
