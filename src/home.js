function createHome(){
    const homeSection = document.createElement('div')
    homeSection.classList.add('home', 'container')

    const homeTitle = document.createElement('h1')
    homeTitle.classList.add('title')
    homeTitle.innerText = "RESTAURANTE ITALIANO \n(Pasta, Lasaña, Panini, Pizza)"

    const homeImage = document.createElement('img')
    homeImage.src = './images/lasaña.jpg'
    homeImage.alt = 'Lasaña con miamor'
    homeImage.width = 200

    const description = document.createElement('p')
    description.innerText = "Un rincón italiano lleno de nuestra esencia, acogedor, buena energia y deliciosa comida casera hecha por italiano¡Visítanos!"

    homeSection.append(homeTitle, homeImage, description)

    return homeSection

}


export default createHome