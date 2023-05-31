//HEADER
let menu = document.querySelector("#menuBtn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");

  loginForm.classList.remove("active");
  searchBox.classList.remove("active");
  savedBox.classList.remove("active");
  savedCart.classList.remove("active");
});

//login form

let profile = document.querySelector("#userBtn");
let loginForm = document.querySelector("#user");

profile.addEventListener("click", () => {
  loginForm.classList.toggle("active");

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
  savedBox.classList.remove("active");
  savedCart.classList.remove("active");
});

//search bar
let search = document.querySelector("#searchBtn");
let searchBox = document.querySelector("#search");

search.addEventListener("click", () => {
  searchBox.classList.toggle("active");

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  savedBox.classList.remove("active");
  savedCart.classList.remove("active");
});

//wish list
let saved = document.querySelector("#heartBtn");
let savedBox = document.querySelector("#saved");

saved.addEventListener("click", () => {
  savedBox.classList.toggle("active");

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  searchBox.classList.remove("active");
  savedCart.classList.remove("active");
});


//cart
let cart = document.querySelector('#cartBtn')
let savedCart = document.querySelector('#cart')

cart.addEventListener("click", () => {
  savedCart.classList.toggle("active");

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  searchBox.classList.remove("active");
  savedBox.classList.remove("active");
})


//window onscroll
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  searchBox.classList.remove("active");
  savedBox.classList.remove("active");
  savedCart.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
}; 


