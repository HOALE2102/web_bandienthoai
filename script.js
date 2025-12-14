let filteredProducts = [...products];
let currentProductDetail = null;
let currentViewMode = 'user';

function handleSearch(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    filteredProducts = products.filter(p => p.name.toLowerCase().includes(lowerKeyword) || p.brand.toLowerCase().includes(lowerKeyword));
    
    // Chỉ render lại user view khi tìm kiếm
    if (currentViewMode === 'user') renderUserView();
}