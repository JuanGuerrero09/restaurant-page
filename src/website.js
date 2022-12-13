import createHome from "./home"
import createMenu from "./menu"
import createContact from "./contact"


function createHeader(){
    const header = document.createElement('header')

    const title = document.createElement('h1')
    title.innerText = "Apprendista"

    header.appendChild(title)
    header.appendChild(createNavbar())


    return header
}

function createNavbar(){
    const navBar = document.createElement('nav')
    navBar.classList.add('nav')

    const createButton = (name) => {
        const btnElement = document.createElement('div')
        btnElement.innerText = name[0].toUpperCase() + name.substr(1)
        btnElement.classList.add(`nav-btn`)
        btnElement.classList.add(`nav-${name}`)

        btnElement.addEventListener('click', activeSection)
        return btnElement
    }
    const home = createButton('home')
    const menu = createButton('menu')
    const contact = createButton('contact')

    home.classList.add('active')

    navBar.append(home, menu, contact)

    return navBar
}


function createMain(){
    const main = document.createElement('main')
    main.classList.add('main')
    main.appendChild(createHome())   
    return main
}

function activeSection(e){
    const main = document.querySelector('main')
    const sectionBtns = document.querySelectorAll('.nav-btn')
    sectionBtns.forEach(btn => btn.classList.remove('active'))
    const btnSelected = e.target
    btnSelected.classList.add('active')
    console.log(sectionBtns[0].classList.contains('active'))
    
    main.innerHTML = ''

    if (sectionBtns[0].classList.contains('active')){
        main.appendChild(createHome())
    }
    else if (sectionBtns[1].classList.contains('active')){
        //Menu function
        main.appendChild(createMenu())
    }
    else if (sectionBtns[2].classList.contains('active')){
        main.appendChild(createContact())
    }
    
    //TODO Separar lógica de activar sección y activar clase
    
}

function createWebsite(){
    const content = document.querySelector('.content')
    content.append(createHeader(), createMain())
}



export default createWebsite