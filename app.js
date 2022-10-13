console.log('Coding is fun!')

const text = document.querySelector('p');
const showtext = document.querySelector('#show');

//show text
function appearText() {
    text.style.display = 'block';
}

showtext.onclick = appearText;

//hide text
const hidetext = document.querySelector('#hide');

function disappearText() {
    text.style.display = 'none';
}

hidetext.onclick = disappearText;


//show image

const image = document.querySelector('img');
const showImage = document.querySelector('#image');

//show image
function appearImage() {
    image.style.display = 'block';
}

showImage.onclick = appearImage;

//hide image
const hideImage = document.querySelector('#noImage');

function disappearImage() {
    image.style.display = 'none';
}

hideImage.onclick = disappearImage;