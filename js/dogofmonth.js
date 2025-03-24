const dogInfo = [
    { name: "Walter", breed: "Bloodhound", age: 3, favoriteToy: "Tennis ball", specialTalent: "Expert sniffer", image: "../images/Dikkehond13.jpg" },
    { name: "Bella", breed: "Golden Retriever", age: 5, favoriteToy: "Frisbee", specialTalent: "Fetching expert", image: "../images/Dikkehond12.jpg" },
    { name: "Max", breed: "German Shepherd", age: 4, favoriteToy: "Rope toy", specialTalent: "Guarding", image: "../images/Dikkehond11.jpg" },
    { name: "Lucy", breed: "Beagle", age: 2, favoriteToy: "Squeaky toy", specialTalent: "Tracking", image: "../images/Dikkehond10.jpg" },
    { name: "Charlie", breed: "Poodle", age: 6, favoriteToy: "Plush toy", specialTalent: "Performing tricks", image: "../images/Dikkehond9.jpg" }
  ];
  
  let currentDogOfMonthIndex = 0;
  
  function changeDogOfMonthImage() {
    const dogImgElement = document.querySelector('.background-image');
    const dogInfoElement = document.querySelector('#dog-info');
    
    if (dogImgElement && dogInfoElement) {
      const currentDog = dogInfo[currentDogOfMonthIndex];
      dogImgElement.style.backgroundImage = `url('${currentDog.image}')`;
      dogInfoElement.innerHTML = `
        <h2>${currentDog.name}</h2>
        <p>Breed: ${currentDog.breed}</p>
        <p>Age: ${currentDog.age} years old</p>
        <p>Favorite toy: ${currentDog.favoriteToy}</p>
        <p>Special talent: ${currentDog.specialTalent}</p>
        <p>March 2025</p>
      `;
      currentDogOfMonthIndex = (currentDogOfMonthIndex + 1) % dogInfo.length;
    }
  }
  
  // Change the image and info immediately and then every 15 seconds
  let dogInterval;
  
  function startDogInterval() {
    changeDogOfMonthImage();
    dogInterval = setInterval(changeDogOfMonthImage, 15 * 1000);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    startDogInterval();
  
    // Add keyboard shortcut (press 'n' to see next dog)
    document.addEventListener('keydown', function(event) {
      if (event.key === 'n') {
        clearInterval(dogInterval);
        changeDogOfMonthImage();
        startDogInterval();
      }
    });
  });
  