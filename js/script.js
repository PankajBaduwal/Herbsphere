let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

document.getElementById('search-btn').addEventListener('click', function() {
  document.getElementById('search-bar-container').classList.toggle('active');
});

document.getElementById('search-bar').addEventListener('keyup', function() {
  let searchTerm = document.getElementById('search-bar').value;
  let searchResults = document.getElementById('search-results');

  if (searchTerm.length > 0) {
    searchResults.innerHTML = '<p>Searching for: ' + searchTerm + '</p>';
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
});










formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});

const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const moreContent = document.getElementById(`more-content-${index + 1}`);
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
      moreContent.style.display = "block";
      button.innerHTML = "Read Less";
    } else {
      moreContent.style.display = "none";
      button.innerHTML = "Read More";
    }
  });
});