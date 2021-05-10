//search input box
let searchInput     = document.getElementById('search_text');
let bodyArea        = document.getElementById('body');
let isSearchClicked = false;
let dateObj = new Date();


//reduce search width 
bodyArea.addEventListener('click', () => {
    
    let searchClasses = searchInput.classList;
    if(searchClasses[0] === 'active' && isSearchClicked) {
        searchInput.classList.remove('active');
    }
});


//adding event listner
searchInput.addEventListener('click', () => {

    isSearchClicked = false;
    searchInput.classList.toggle('active', true);
    setTimeout(() => { isSearchClicked = true }, 500);

});

//add year in footer
document.getElementById('year').innerHTML = dateObj.getFullYear();

// initialize swiper
const swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    loop:true,
    freeMode: true,
    width: '1200',
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper_right",
        prevEl: ".swiper_left",
    },
    breakpoints: {
        320:{
            width: '280', 
        },
        480:{
            width: '420',
        },
        640:{
            width: '600'
        },
        760:{
            width: '720'
        },
        1300:{
            width: '1200'
        }
    }

});

const swiper2 = new Swiper(".mySwiper1", {
    centeredSlides: true,
    freeMode: true,
    width: '150',
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper_right1",
      prevEl: ".swiper_left1",
    },
  });