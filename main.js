let cities = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
        console.log(arrayToPrint);
        let domString = '';
        arrayToPrint.forEach((city) => {
            domString += `<div class="card col-4">`;
            domString += `<h3 class="card-title">${city.cityName}</h3>`;
            domString += `<h6>${city.cityCountry}</h6>`;
            domString += `<img src="${city.cityImage}" class="card-img-top" alt="...">`;
            domString += `<h6>Favorite restaurant: ${city.favoriteRestaurant}</h6>`;
            domString += `<h6>Favorite bar: ${city.favoriteBar}</h6>`;
            domString += `<h6>Favorite hotel: ${city.favoriteHotel}</h6>`;
            domString += `<h6>Favorite tourist attraction: ${city.favoriteTouristAttraction}</h6>`;
            domString += `</div>`;
    
        });
        printToDom('city-container', domString);
    //put a domStringBuilder looping over arrayToPrint. use a for loop to build up donString
    //call printToDom
};

function executeThisCodeAfterFileLoads() {
    console.log('hi');
    const data = JSON.parse(this.responseText);
    console.log(data)
    cities = data.cities;
    domStringBuilder(data.cities);
};

function executeThisCodeifXHRFails() {
    console.error('oh shit');
};

const getCitiesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeifXHRFails);
    myRequest.open('GET', './cities.json');
    myRequest.send();
};

const init = () => {
    getCitiesData();
    // domStringBuilder(cities);

};

init();