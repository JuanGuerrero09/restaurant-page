function createHome(){
    const homeSection = document.createElement('div')
    homeSection.classList.add('home')

    const title = document.createElement('h2')
    title.innerText = "RESTAURANTE ITALIANO (Pasta, Lasaña, Panini, Pizza)"

    const description = document.createElement('p')
    description.innerText = "Un rincón italiano lleno de nuestra esencia, acogedor, buena energia y deliciosa comida casera hecha por italiano¡Visítanos!"

    homeSection.append(title, description)

    return homeSection

}


export default createHome