
function createMenuSection(title){
    const menuSection = document.createElement('div')
    menuSection.classList.add('menu-section')

    const menuSectionTitle = document.createElement('h3')
    menuSectionTitle.classList.add('menu-title')
    menuSectionTitle.innerText = title

    const menuSectionBody = document.createElement('div')
    menuSectionBody.classList.add('menu-section-body')

    menuSection.append(menuSectionTitle, menuSectionBody)

    return menuSection
}



function createMenuElement(imageDir, elementName, elementPrice){
    const menuElement = document.createElement('div')
    menuElement.classList.add('menu-element')

    const img = document.createElement('img')
    img.src = imageDir
    img.alt = imageDir.split('/')[2]
    img.width = 100

    const menuElementName = document.createElement('p')
    menuElementName.innerText = elementName

    const menuElementPrice = document.createElement('p')
    menuElementPrice.innerText = elementPrice
    
    menuElement.append(img, menuElementName, menuElementPrice)
    
    return menuElement
}

//Antipasto -> crostini caprese
//Lasaña -> Italiana pollochampiñones
//Pasta -> Boloñesa carbonara pesto
//Panini -> clasico hawaiano serrano
//Piatti speciali -> ravioli ensalada caprese
//Dolce -> Tiramisu

function createMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu', 'container')

    const menuTitle = document.createElement('h1')
    menuTitle.classList.add('title')
    menuTitle.innerText = 'Menu'

    const menuBody = document.createElement('div')
    menuBody.classList.add('menu-body')

    const antipasto = createMenuSection('Antipasto')
    const crostini = createMenuElement('./images/pizza.jpg', 'Crostini', 6000)
    const caprese = createMenuElement('./images/pizza.jpg', 'Caprese', 6000)
    antipasto.lastChild.append(crostini, caprese)

    const lasaña = createMenuSection('Lasaña')
    const italiana = createMenuElement('./images/pizza.jpg', 'Italiana', 19000)
    const polloChampiñones = createMenuElement('./images/pizza.jpg', 'Pollo Champiñones', 21000)
    lasaña.append(italiana, polloChampiñones)

    const pasta = createMenuSection('Pasta')
    const boloñesa = createMenuElement('./images/pizza.jpg', 'Boloñesa', 16000)
    const carbonara = createMenuElement('./images/pizza.jpg', 'Carbonara', 18000)
    const pesto = createMenuElement('./images/pizza.jpg', 'Pesto', 18000)
    pasta.append(boloñesa, carbonara, pesto)

    const panini = createMenuSection('Panini')
    const clasico = createMenuElement('./images/pizza.jpg', 'Clásico', 14000)
    const hawaiano = createMenuElement('./images/pizza.jpg', 'Hawaiano', 14000)
    panini.append(clasico, hawaiano)

    menuBody.append(antipasto, lasaña, pasta, panini)
    


    menu.append(menuTitle, menuBody)
    return menu
}


export default createMenu