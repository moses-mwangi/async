"use strick";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};

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
/*
const renderCountry = function (data, className = " ") {
  const dat = data.languages;
  console.log(dat);
  const html = ` <article class="country ${className}">
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
*/
/*
const getCountryAndNeighbour = function (country, currenc) {
  //AjxCall country 1

  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    ////render country 1
    renderCountry(data);

    ///get neighbour country 2
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;
    ///ajax call country 2

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      //reder country

      renderCountry(data2, neighbour);
    });
  });
};
// getCountryAndNeighbour("kenya");
getCountryAndNeighbour("usa");
*/

//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

const renderCountry = function (data, className = " ") {
  const dat = data.languages;
  console.log(dat);
  const html = ` <article class="country ${className}">
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
  //   countriesContainer.style.opacity = 1;
};

/*const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};*/

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err}`);
      renderError(`somothing went wrong ${err.message}.Try again later`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("haiti");
});
