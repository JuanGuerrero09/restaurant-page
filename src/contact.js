function createContact(){
    const contactSection = document.createElement('div')
    contactSection.classList.add('contact', 'container')

    const contactTitle = document.createElement('h1')
    contactTitle.classList.add('title')
    contactTitle.innerText = 'Contáctenos'

   const mapDirection = document.createElement('div')
   mapDirection.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9940000992688!2d-73.11764178522586!3d7.126689294853766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e681529d99a2f0b%3A0x944172f70d803820!2sApprendista!5e0!3m2!1ses!2sco!4v1671337612049!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
   mapDirection.classList.add('map-direction')

   const directionDetails = document.createElement('div')
   directionDetails.classList.add('direction-details')

   const contactDirection = document.createElement('p')
   contactDirection.innerHTML = `<i class="fa-solid fa-location-dot"></i> Dirección<br> 
   Cra. 30a #31-27, Bucaramanga, Santander`

   const contactHours = document.createElement('p')
   contactHours.innerHTML = '<i class="fa-solid fa-clock"></i>  Horario<br> 12:00 - 16:00 & 18:00 - 22:00'

    directionDetails.append(contactDirection, contactHours)
    

    contactSection.append(contactTitle, mapDirection, directionDetails)
    return contactSection
}




export default createContact