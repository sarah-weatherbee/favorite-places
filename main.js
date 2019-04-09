let cities = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//put a domStringBuilder looping over arrayToPrint. use a for loop to build up donString
    //call printToDom
const domStringBuilder = (arrayToPrint) => {
        console.log(arrayToPrint);
        let domString = '';
        arrayToPrint.forEach((city) => {
            domString += `<div class="col-4 d-flex">`;
            domString += `<div class="card">`;
            domString += `<h3 class="card-title">${city.cityName}</h3>`;
            domString += `<h6>${city.cityCountry}</h6>`;
            domString += `<img src="${city.cityImage}" class="card-img-top" alt="...">`;
            domString += `<h6><strong>Favorite restaurant:</strong> ${city.favoriteRestaurant}</h6>`;
            domString += `<h6><strong>Favorite bar:</strong> ${city.favoriteBar}</h6>`;
            domString += `<h6><strong>Favorite hotel:</strong> ${city.favoriteHotel}</h6>`;
            domString += `<h6><strong>Favorite tourist attraction:</strong> ${city.favoriteTouristAttraction}</h6>`;
            domString += `</div>`;
            domString += `</div>`;
    
        });
        printToDom('city-container', domString);
};

const buttonClick = (e) => {
    const buttonId = e.target.id;
    const selectedCities = [];
    cities.forEach((city) => {
        if (city.type === buttonId) {
            selectedCities.push(city);
        }
    });

    if (buttonId === 'all') {
        domStringBuilder(cities);
    } else {
        domStringBuilder(selectedCities);
    }  
};

const buttonEvents = () => {
    document.getElementById('adventure').addEventListener('click', buttonClick);
    document.getElementById('nope').addEventListener('click', buttonClick);
    document.getElementById('weekend').addEventListener('click', buttonClick);
    document.getElementById('all').addEventListener('click', buttonClick);
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
    myRequest.open('GET', './db/cities.json');
    myRequest.send();
};

const init = () => {
    getCitiesData();
    buttonEvents();
    domStringBuilder(cities);

};

init();