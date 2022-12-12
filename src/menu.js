
function createMenuSection(title){
    const menuSection = document.createElement('div')
    menuSection.classList.add('menu-section')

    const menuSectionTitle = document.createElement('h3')
    menuSectionTitle.classList.add('menu-title')
    menuSectionTitle.innerText = title

    menuSection.append(menuSectionTitle)

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
    menu.classList.add('menu')

    const menuTitle = document.createElement('h1')
    menuTitle.innerText = 'menu'

    const antipasto = createMenuSection('Antipasto')
    const crostini = createMenuElement('./images/pizza.jpg', 'Crostini', 6000)
    const caprese = createMenuElement('./images/pizza.jpg', 'Caprese', 6000)
    antipasto.append(crostini, caprese)

    const lasaña = createMenuSection('Lasaña')
    const italiana = createMenuElement('./images/pizza.jpg', 'Italiana', 19000)
    const polloChampiñones = createMenuElement('./images/pizza.jpg', 'Pollo Champiñones', 21000)
    lasaña.append(italiana, polloChampiñones)

    


    menu.append(menuTitle, antipasto, lasaña)
    return menu
}


export default createMenu