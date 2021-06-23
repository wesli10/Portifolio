const next = document.querySelector('#nextProject')
const last = document.querySelector('#lastProject')

const titleContainer = document.querySelector('#projectTitle')
const descriptionContainer = document.querySelector('#projectDescription')
const imageDesktop = document.querySelector('#imageDesktop')
const imageMobile = document.querySelector('#imgMobile')
const linkContainer = document.querySelector('#projectLink')
const showQuantityProject = document.querySelector('#showQuantityProject')

const projects = [

  {
    name: 'Sistema Biblioteca em PHP',
    description: 'Sistema CRUD Web para uma biblioteca, o BackEnd foi feito em PHP puro e o frontEnd foi feito com HTML, CSS e Bootstrap.',
    imageDesktop: './imagens/bibliotecaDesktop.png',
    link: 'https://github.com/wesli10/SistemaBiblioteca'
    
  },
  
  {
    name: 'Template de testes funcionais Web',
    description: 'Este projeto se trata de um template de testes funcionais para Web em Java, com os recursos PageObject em uso da ferramenta Selenium WebDriver.',
    imageDesktop: './imagens/template.png',
    link: 'https://github.com/wesli10/TemplateFuncionalTest',
  },
  {
      name: 'Calculadora Js',
      description: 'Este projeto se trata de uma calculadora básica feita em HTML, Css e JavaScript.',
      imageDesktop: './imagens/calc.png',
      link: 'https://github.com/wesli10/CalculadoraJS'
  },
  {
      
      name: 'Pong Game',
      description: 'Este projeto se trata de um Pong game feito em C# com a Engine Unity',
      imageDesktop: './imagens/pong.png',
      link: 'https://github.com/wesli10/PongGame'
  }

]

const renderProject = (obj,index) => {
  titleContainer.innerText = obj[index].name
  descriptionContainer.innerText = obj[index].description
  imageDesktop.setAttribute('src', obj[index].imageDesktop)
  imageMobile.setAttribute('src', obj[index].imageMobile)
  linkContainer.setAttribute('href', obj[index].link)
  showQuantityProject.innerText = `${index + 1}/0${obj.length}`
  if (index <= 9) {
    showQuantityProject.innerText = `${index + 1}/0${obj.length}`
  }
  if ((index + 1) <= 9) {
    showQuantityProject.innerText = `0${index + 1}/0${obj.length}`
  }
}

const changeProject = (obj) => {

  let index = 0
  renderProject(obj,index)

  next.addEventListener('click', () => {
    index += (index < obj.length - 1) ? 1 : 0
    console.log(index)
    renderProject(obj, index)
  })

  last.addEventListener('click', () => {
    index -= (index > 0) ? 1 : 0
    console.log(index)
    renderProject(obj, index)
  })
}

window.onload = changeProject(projects)