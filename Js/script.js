const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')
// const imgI = document.getElementById('imgs-I')
// const imgII = document.getElementById('imgs-II')

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// })



const nav = document.getElementById('menu')
const imgI = document.getElementById('imgs-I')
const imgII = document.getElementById('imgs-II')

btn.addEventListener('click', () => {
    imgI.classList.toggle('hidden')
    imgII.classList.toggle('hidden')
    nav.classList.toggle('hidden')
    nav.classList.toggle('flex')
})




const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    // loop: true,

    slidesPerView: 3,
    // spaceBetween: 10,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

        // activeColor: Color(0xff38547C),
        //     color: Color(0xff38547C),
        

        // builder: {
        //     color: Colors.red, 
        //     activeColor: Color(0xff38547C),
        // },
        // control: {
        //     color: Color(0xff38547C),
        // },

        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    breakpoints: {
        350: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        //   spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
        //   spaceBetween: 5,
        },
      },

});