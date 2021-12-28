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
instance.show()
function onGalerryClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") { 
        return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
    console.log(instance.show())
    

  document.addEventListener("keydown", escCloseModal)
  
  function escCloseModal(event) {
    
        if (event.code !== "Escape") { 
            return
    }
        console.log("Работает")
        instance.close()
  }
  
  document.addEventListener("keydown", removeEscCloseModal)
  
  function removeEscCloseModal(event) {
        if (event.code !== "Escape") { 
            return
    }
    console.log("тогда этот работает")
         document.removeEventListener("keydown", escCloseModal)
  }

  
  

}
 

 









