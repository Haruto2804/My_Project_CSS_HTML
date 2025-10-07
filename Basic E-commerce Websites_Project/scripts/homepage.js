import { products } from "../data/product.js";


  




const cosplayProducts = filterProduct(products,'costume')
renderShowcase(cosplayProducts, 'Cosplay','bán chạy, giá siêu hời');

function renderShowcase(products,categories,title) {
  // Bước 1: chọn phần container
  const container = document.querySelector('.js-showcase-products-container');
  
  // Bước 2: tạo header (chỉ 1 lần)
  let productsHTML = `
    <div class="showcase__header">
      <p> Sản phẩm <span class="showcase__header-product-name--blue">${categories}</span> ${title}</p>
    </div>
    <div class="showcase-Products">
  `;

  // Bước 3: thêm từng sản phẩm vào
  products.forEach((product) => {
    productsHTML += `
      <div class="showcase__product-item">
        <img class="showcase__product" src="${product.image}" alt="${product.name}">
        <span class="sales-off">${product.rating}+ </span>
        <p class="showcase__product-name">${product.name}</p>
        <p class="showcase__product-price">${product.price}đ</p>
        <p class="showcase__product-save-price">Chốt deal ngay!</p>
      </div>
    `;
  });

  // Bước 4: đóng div và gán vào container
  productsHTML += `</div>`; // đóng showcase-Products
  container.innerHTML = productsHTML;
}






function filterProduct (products,your_filter) {
   let filtered = [];
   // lọc sản phẩm cosplay
    filtered = products.filter((product)=> product.type === your_filter);
    return filtered;
}

const navElement = document.querySelector('.nav-mobile');
const headerMenuBtn = document.querySelector('.js-ham-menu');
const overlayElement = document.querySelector('.overlay');
headerMenuBtn.addEventListener('click',()=> {
  navElement.classList.add('showUp');
  overlayElement.classList.add('active');

  // ẩn overlay khi click ra ngoài
})
overlayElement.addEventListener('click', () => {
  navElement.classList.remove('showUp');
  overlayElement.classList.remove('active'); // ẩn overlay khi click ra ngoài
})