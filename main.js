window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//contact button (circular text buttons)
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML= text.innerHTML.split('').map((character, index) => 
        `<span style="transform:rotate(${index * 12 }deg)">${character}</span>`).join('');
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });