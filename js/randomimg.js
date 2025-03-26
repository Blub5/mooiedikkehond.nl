const images = [
    '../images/Dikkehond2.jpg',
    '../images/Dikkehond3.jpg',
    '../images/Dikkehond4.jpg',
    '../images/Dikkehond5.jpg',
    '../images/Dikkehond6.jpg',
    '../images/Dikkehond7.jpg'
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('dog-photo');
    
    imgElement.src = images[currentIndex];
    
    currentIndex = (currentIndex + 1) % images.length;
}

changeImage();

setInterval(changeImage, 10 * 1000);
