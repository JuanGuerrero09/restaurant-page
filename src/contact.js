function createContact(){
    const contactSection = document.createElement('div')
    contactSection.classList.add('contact', 'container')

    const contactTitle = document.createElement('h1')
    contactTitle.classList.add('title')
    contactTitle.innerText = 'Contáctenos'

   const mapDirection = document.createElement('img')
   mapDirection.src = './images/apprendistadirection.jpg'
   mapDirection.classList.add('map-image')

   const directionDetails = document.createElement('div')
   directionDetails.classList.add('direction-details')

   const contactDirection = document.createElement('p')
   contactDirection.innerHTML = `<i class="fa-solid fa-location-dot"></i> Dirección<br> 
   Cra. 30a #31-27, Bucaramanga, Santander`

   const contactHours = document.createElement('p')
   contactHours.innerHTML = '<i class="fa-solid fa-clock"></i>Horario<br> 12:00 - 16:00 & 18:00 - 22:00'

    directionDetails.append(contactDirection, contactHours)
    

    contactSection.append(contactTitle, mapDirection, directionDetails)
    return contactSection
}




export default createContact