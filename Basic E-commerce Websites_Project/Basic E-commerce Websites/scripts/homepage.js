import { products } from "../data/product.js";
import { formatCurrency,getRandomInt } from "./utils/money.js";

  




const cosplayProducts = filterProduct(products,'costume')
renderShowcase(cosplayProducts, 'Cosplay','bán chạy, giá siêu hời');






renderProductSection(products);

function renderProductSection (products) {
  let productsHTML = '';
  products.forEach((product)=> {
    productsHTML +=  `
      <div class = "product">
            <img class = "product__img" src="${product.image}" alt="">
            <p class = "product-name">${product.name}</p>
            <img class = "product-rating" src="./images/ratings/rating-${product.rating.stars *10}.png" alt="">
            <p class = "product-price" >${formatCurrency(product.price)}</p>
            <button class ="add-to-cart">Mua hàng</button>
      </div>

    `
  })
  document.querySelector('.products-grid')
    .innerHTML = productsHTML;
}
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
        <span class="sales-off">${getRandomInt(5000,100000)}+ </span>
        <p class="showcase__product-name">${product.name}</p>
        <p class="showcase__product-price">${formatCurrency(product.price)}</p>
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

})
handleOverlay();
function handleOverlay () {
overlayElement.addEventListener('click', () => {
  navElement.classList.remove('showUp');
  overlayElement.classList.remove('active'); // ẩn overlay khi click ra ngoài
})
}


console.log(products);
handleProductsLabel()
function handleProductsLabel (){
  const productsLabelElement = document.querySelectorAll('.products__label');
    if(productsLabelElement.length>0) {
      productsLabelElement.forEach((btn)=> {
      btn.addEventListener('click',()=> {
        productsLabelElement.forEach((b)=> {
          b.classList.remove('active');
        })
        btn.classList.add('active');
      });
    })
    }
}


renderByCategory();
function renderByCategory () {
  const productsLabelByCategoryElement = document.querySelectorAll('.products__label');
  productsLabelByCategoryElement.forEach((label)=> {
    const labelId = label.id;
    if(labelId) {
        console.log(labelId)
      label.addEventListener('click',()=> {
      const filtered = filterProduct(products,labelId);
      renderProductSection(filtered);
    })
    }else {
      document.querySelector('.products-grid')
        .innerHTML = 'Không có sản phẩm mà bạn tìm!'
    }
  })
}