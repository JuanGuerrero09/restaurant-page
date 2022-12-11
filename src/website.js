

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
        btnElement.addEventListener('click', activeBtn)
        return btnElement
    }
    const home = createButton('home')
    const menu = createButton('menu')
    const contact = createButton('contact')

    navBar.append(home, menu, contact)

    return navBar
}

function activeBtn(e){
    console.log(e.target)
    const btnSelected = e.target
    const allBtns = document.querySelectorAll('.nav-btn')
    allBtns.forEach(btn => btn.classList.remove('active'))
    btnSelected.classList.add('active')
}

function createWebsite(){
    const content = document.querySelector('.content')
    content.appendChild(createHeader())
    allBtns.forEach(btn => showContent(btn))
}

function showContent(btn){
    if (btn.classList.contains('active')){
        return true
    }
}


export default createWebsite