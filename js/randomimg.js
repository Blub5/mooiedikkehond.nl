// List of image files
const images = [
    '../images/Dikkehond2.jpg',
    '../images/Dikkehond3.jpg',
    '../images/Dikkehond4.jpg',
    '../images/Dikkehond5.jpg',
    '../images/Dikkehond6.jpg',
    '../images/Dikkehond7.jpg'
];

let currentIndex = 0;

// Function to change the image
function changeImage() {
    // Select the image element
    const imgElement = document.getElementById('dog-photo');
    
    // Change the src to the current image
    imgElement.src = images[currentIndex];
    
    // Update the index for the next image
    currentIndex = (currentIndex + 1) % images.length;
}

// Start changing the image
changeImage();

// Change the image every 10 seconds (10 * 1000 milliseconds)
setInterval(changeImage, 10 * 1000);
