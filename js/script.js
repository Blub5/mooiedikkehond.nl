const images = [
    'images/Dikkehond2.jpg',
    'images/Dikkehond3.jpg',
    'images/Dikkehond4.jpg',
    'images/Dikkehond5.jpg',
    'images/Dikkehond6.jpg',
    'images/Dikkehond7.jpg'
];

let currentIndex = 0;

const backgroundImageElement = document.querySelector('.background-image');

function changeBackgroundImage() {
    backgroundImageElement.style.animation = 'fade-out 1s ease forwards';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundImageElement.style.backgroundImage = `url(${images[currentIndex]})`;

        backgroundImageElement.style.animation = 'onstart-scale 2s ease forwards';
    }, 1000);
}

changeBackgroundImage();

setInterval(changeBackgroundImage, 10 * 1000);

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;