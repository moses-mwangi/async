"use strick";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*
const getCountryData = function (country, currenc) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = ` <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(data.population / 1000000).toFixed(1)} people
      </p>
      <p class="country__row">
        <span>🗣️</span>${data.languages.swa}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies.name}
      </p>
    </div>
  </article>;
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};
getCountryData("kenya");
getCountryData("uganda");
getCountryData("tanzania");
*/

const renderCountry = function (data) {
  const html = ` <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(data.population / 1000000).toFixed(1)} people
      </p>
      <p class="country__row">
        <span>🗣️</span>${data.languages.swa}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies.name}
      </p>
    </div>
  </article>;
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const getCountryAndNeighbour = function (country, currenc) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
  });
};
getCountryAndNeighbour("kenya");
