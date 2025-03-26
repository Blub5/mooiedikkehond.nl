const dogInfo = [
    { name: "Walter", breed: "Bloodhound", age: 3, favoriteToy: "Tennis ball", specialTalent: "Expert sniffer", image: "../images/Dikkehond8.jpg" },
    { name: "Doge", breed: "Dikzak", age: 5, favoriteToy: "Frisbee", specialTalent: "Fetching expert", image: "../images/vetzak1.png" },
    { name: "Max", breed: "Goofy", age: 4, favoriteToy: "Rope toy", specialTalent: "Guarding", image: "../images/vetzak2.png" },
    { name: "Walter2", breed: "Vetzak", age: 2, favoriteToy: "Squeaky toy", specialTalent: "Tracking", image: "../images/vetzak3.png" },
    { name: "Walter", breed: "Witte", age: 6, favoriteToy: "Plush toy", specialTalent: "Performing tricks", image: "../images/vetzak4.png" }
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
  

  let dogInterval;
  
  function startDogInterval() {
    changeDogOfMonthImage();
    

    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const timeUntilNextMonth = nextMonth - now;
    
    setTimeout(() => {
      changeDogOfMonthImage();
      
      dogInterval = setInterval(changeDogOfMonthImage, 24 * 60 * 60 * 1000);
    }, timeUntilNextMonth);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    startDogInterval();
  
    // Add keyboard shortcut (press 'n' to see next dog)
   // document.addEventListener('keydown', function(event) {
     // if (event.key === 'n') {
       // clearInterval(dogInterval);
       // changeDogOfMonthImage();
       // startDogInterval();
     // }
    //});
  });
  