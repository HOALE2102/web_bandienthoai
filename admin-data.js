const rawImages = [
    "https://happyphone.vn/wp-content/uploads/2024/04/Oppo-A18-4GB-128GB.jpg",
    "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/dong-dien-thoai-oppo-nao-tot-nhat-8.jpg", 
    "https://cdn-v3.xtmobile.vn/vnt_upload/news/04_2024/thumbs/(480x218)_crop_danh-gia-samsung-galaxy-z-trifold-xtmobile.jpg", 
    "https://kenh14cdn.com/203336854389633024/2025/10/31/photo-1761908247928-17619082481681790692868-1761909710810-17619097111351718197123.jpeg", 
    "https://happyphone.vn/wp-content/uploads/2024/03/Oppo-A58-5G-6GB-128GB.png", 
    "https://www.anphatpc.com.vn/media/news/2710_Macbook2.jpg", 
    "https://cdn.tgdd.vn/News/0/co-nen-mua-macbook-pro-cu-chia-se-kinh-nghiem-2-800x400.jpg" 
];

const brands = ["Apple", "Samsung", "Oppo", "Huawei", "Xiaomi", "Google"];


const products = Array.from({ length: 24 }, (_, i) => {
    const imgIndex = i % rawImages.length; 
    const brandIndex = i % brands.length;
    const isCheap = i % 3 === 0;
    
    return {
        id: i + 1,
        name: `${brands[brandIndex]} Smartphone Pro Max ${i + 1} - Chính hãng`,
        price: isCheap ? 8990000 + (i * 200000) : 24000000 + (i * 500000),
        brand: brands[brandIndex],
        image: rawImages[imgIndex],
        status: i === 3 || i === 15 ? "Hết hàng" : "Còn hàng",
        description: "Sản phẩm chính hãng với thiết kế nguyên khối sang trọng. Màn hình 120Hz mượt mà, camera độ phân giải cao chụp đêm sắc nét. Chip xử lý thế hệ mới giúp chiến game mượt mà."
    };
});

const formatMoney = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};