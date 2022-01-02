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