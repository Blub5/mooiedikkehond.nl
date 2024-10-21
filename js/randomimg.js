// Lijst van afbeeldingsbestanden
const images = [
    'Dikkehond2.jpg', // Voeg hier de namen van je afbeeldingen toe
    'Dikkehond3.jpg',
    'Dikkehond4.jpg',
    'Dikkehond5.jpg',
    'Dikkehond6.jpg',
    'Dikkehond7.jpg'
];

let currentIndex = 0;

// Functie om de afbeelding te veranderen
function changeImage() {
    // Selecteer het afbeeldingselement
    const imgElement = document.getElementById('dog-photo');

    // Verander de src naar de huidige afbeelding
    imgElement.src = "images/"+images[currentIndex];

    // Update de index voor de volgende afbeelding
    currentIndex = (currentIndex + 1) % images.length; // Zorgt ervoor dat het terugloopt naar het begin
}

// Start de verandering van de afbeelding
changeImage();

// Verander de afbeelding elke 10 seconden (10 * 1000 milliseconden)
setInterval(changeImage, 10 * 1000);