/*Abre e fecha o menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

/*Quando clicar em um dos itens do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')
for(const link of links ){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}
/*mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeigth = header.offsetHeight

window.addEventListener('scroll', function(){
  if(this.window.scrollY >= navHeigth){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
})

/*Swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 }
)