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

function switchView(viewName) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.getElementById(`${viewName}-view`).classList.add('active');
    currentViewMode = viewName;
    
    // GỌI HÀM RENDER CỦA TV3 VÀ TV5
    if (viewName === 'user') renderUserView(); // Gọi hàm của TV3
    if (viewName === 'cart') renderCartView(); // Gọi hàm của TV5 (nếu đã thêm)
}

// Logic hiển thị chi tiết sản phẩm (FR2.3)
function showDetail(product) {
    currentProductDetail = product; 
    
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.getElementById('detail-view').classList.add('active');
    window.scrollTo(0, 0); 

    // Các dòng hiển thị chi tiết... (sử dụng formatMoney từ TV2)
    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailName').innerText = product.name;
    document.getElementById('detailBrand').innerText = `Thương hiệu: ${product.brand}`;
    document.getElementById('detailPrice').innerText = formatMoney(product.price);
    // ...
}

// Logic Quay lại (Sử dụng cho detail-view)
function goBack() {
    // Quay lại view 'user' (hoặc 'cart' nếu có logic)
    switchView('user'); 
}

// KHỞI TẠO ỨNG DỤNG (Đảm bảo chạy đầu tiên khi tải script.js)
// Lệnh này sẽ gọi switchView, và switchView sẽ gọi renderUserView (TV3)
switchView('user');