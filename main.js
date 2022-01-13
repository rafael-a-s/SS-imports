/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
/* Logica do fileter de brands  */
var pos = 0 //variavel responsavel pelas posições das imagens no carousel
var aux = 0 //variavel responsavel por aux na verificação de imagens 
const brands = document.querySelectorAll('#catalog .container .div-catalog .carousel .brand')
const tags = document.querySelectorAll('#catalog .filter .box .tags')
tags[0].addEventListener('click',function(){
  resetPosImg()
  pos = 0
  aux = 1
  brands.forEach(brands =>{
    brands.classList.remove('selected')
  })
  brands[0].classList.add('selected')
  tags.forEach(tags => {
    console.log('entrou')
    tags.classList.remove('active-tag')
  });
  tags[0].classList.add('active-tag')
})

tags[1].addEventListener('click',function(){
  resetPosImg()
  pos = 0
  aux = 1
  console.log(aux)
  brands.forEach(brands =>{
    brands.classList.remove('selected')
  })
  brands[1].classList.add('selected')
  tags.forEach(tags => {
    console.log('entrou')
    tags.classList.remove('active-tag')
  });
  tags[1].classList.add('active-tag')
})

/*Logica carousel*/

const skip =
 document.querySelector
 ('#catalog .container .div-catalog .carousel .arrows #skip');
 const back =
  document.querySelector
  ('#catalog .container .div-catalog .carousel .arrows #back');
  
  var imgs = document.querySelectorAll('#catalog .container .div-catalog .carousel .brand.selected .img ');
  skip.addEventListener('click',function(){

    if(aux == 1){ //verfica se mudou de marca e faz uma nova cosulta de imagens
      console.log('Fez a pesquisa de imagens novamente')
      
      imgs = null
      imgs = document.querySelectorAll('#catalog .container .div-catalog .carousel .brand.selected .img ');
      aux = 0
      
    }
    console.log(pos)
    
    if(pos > imgs.length -2){
      console.log('entrou'+imgs.length-1)
      return;
    }else{
      pos ++;
    }
    if(pos == imgs.length -1){
      skip.style.opacity = '0'
    }
    if(pos>0){
      back.style.opacity = '1'
    }

    for (let index = 0; index < imgs.length; index++) {
      
      
      if(pos == index){
        imgs[pos - 1].classList.remove('active')
       
        imgs[pos].classList.add('active')
        
      }
    }
    
  })
  back.addEventListener('click', function(){
    
    if(pos < 1){
      
      return;
    }else{
      pos --;
      
    }
    if(pos<imgs.length){
      skip.style.opacity = '1'
    }
    if(pos<1){
      back.style.opacity = '0'
    }
    for (let index = 0; index < imgs.length; index++) {
      
      console.log(imgs.length)
      if(pos == index){
        imgs[pos + 1].classList.remove('active')
        imgs[pos].classList.add('active')
       
      }
    }
  })

function resetPosImg(){
  imgs.forEach(imgs => {
    imgs.classList.remove('active')
  })
  imgs[0].classList.add('active')
  back.style.opacity = '0'
}

  



 