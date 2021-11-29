var gallery = document.querySelector('main')
var imageUrls = [];
 var imageUrlInput = document.querySelector('input');
 var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery(){
  gallery.innterHTML = "";
  for (let i=0; i< imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement)
  }
}
