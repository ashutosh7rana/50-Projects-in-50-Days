const imageSelector = document.querySelectorAll('.image');

const banner = document.querySelector('.banner');
banner.classList.add('hidden');

imageSelector.forEach((image) => {
    image.addEventListener('click', () => {
        removeActive();
        image.classList.add('active');
    });
})

function removeActive() {
    imageSelector.forEach(image => image.classList.remove('active'));
}

let timer = 3000;
setInterval(() => {
    const activeImage = document.querySelector('.active');
    const nextImage = activeImage.nextElementSibling || imageSelector[0];
    removeActive();
    nextImage.classList.add('active');
}, timer);

clearInterval(timer);