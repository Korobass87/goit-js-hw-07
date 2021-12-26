import { galleryItems } from './gallery-items.js';
// Change code below this line


const galerry = document.querySelector(".gallery") 


const galerryItm = galleryItems.map((item) =>  
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}"  alt="${item.description}" title="${item.description}" />
</a>`
).join('')

galerry.insertAdjacentHTML('afterbegin', galerryItm)
let gallery = new SimpleLightbox('.gallery a');
gallery.defaultOptions.captionDelay = 250
gallery.defaultOptions.captionData = "alt"
console.log(gallery.defaultOptions.captionData)

gallery.on('show.simplelightbox', function (event) {
         event.preventDefault();
       });



