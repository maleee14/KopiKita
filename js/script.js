// Toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); // Fungsi agar tidak scroll otomatis
};

// Toggle class active search shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar element untuk menghilangkan element
const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-button");
const cartBtn = document.querySelector("#shopping-cart-button");

// Hamburger Menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Search Button
document.addEventListener("click", function (e) {
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Shopping Cart
document.addEventListener("click", function (e) {
  if (!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const modalDetail = document.querySelector("#modal-detail");
const modalBtns = document.querySelectorAll(".modal-detail");

modalBtns.forEach((btn) => {
  btn.onclick = (e) => {
    modalDetail.style.display = "flex";
    e.preventDefault();
  };
});

// Tombol Close
document.querySelector(".modal .close-icon").onclick = (e) => {
  modalDetail.style.display = "none";
  e.preventDefault();
};

// Klick di luar elemen
window.onclick = (e) => {
  if (e.target === modalDetail) {
    modalDetail.style.display = "none";
  }
};
