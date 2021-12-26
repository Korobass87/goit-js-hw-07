import { galleryItems } from './gallery-items.js';
// Change code below this line
const galerry = document.querySelector(".gallery") 


const galerryItm = galleryItems.map((item) =>  
`<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('')

galerry.insertAdjacentHTML('afterbegin', galerryItm)

galerry.addEventListener('click', onGalerryClick)

function onGalerryClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") { 
        return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

    instance.show()

    document.addEventListener("keydown", (event) => {
        if (event.code !== "Escape") { 
            return
        }
        instance.close()
    })

 }









