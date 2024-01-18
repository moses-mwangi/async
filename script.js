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
///////////////////////////////////////////////////////////////////////////////////////////

const renderCountry = function (data, className = " ") {
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
        <span>💰</span>${data.currencies.KES.name}
      </p>
    </div>
  </article>;
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

//   countriesContainer.style.opacity = 1;

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

/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      //   const neighbour = "dfsdfdef";

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => {
      return renderCountry(data, "neighbour");
    })
    .catch((err) => {
      //   console.err(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("kenya");
});
*/
/*
const errad = function (realERR) {
  realERR;
};
const whereAmI = function (lat, lang) {
  fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`the code produces anything ${res.status}`);

      return res.json();
    })
    .then((data) => {
      console.dir(data);
      console.log(`im in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => {
      return renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err.message}`);
      //   errad(`something went wrong ${err.message}.try again`);
    });
};
whereAmI(52.508, 13.381);
*/
// console.log("test 1");
// setTimeout(() => (console.log("it will display after 0 sec"), 0));
// Promise.resolve("callback from a promise").then((arr) => console.log(arr));
// console.log("test 2");

/*
const lottery = new Promise(function (resolve, reject) {
  console.log("lotter draw is happening now");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("you actualy win");
    } else {
      reject("you lost all your money");
    }
  }, 2000);
});

lottery.then((data) => console.log(data)).catch((er) => console.error(er));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("i wait for 2 seconds");
  })
  .then(() => {
    console.log("i wait for 3 seconds");
  })
  .then(() => {
    console.log("i wait for 4 seconds");
  })
  .then(() => {
    console.log("i wait for 5 seconds");
  });

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
  });
};
getPosition().then((pos) => console.log(pos));
*/
////////////////////////////////////
/*
const errad = function (realERR) {
  realERR;
};
const whereAmI = function () {
  getPosition()
    .then((pos) => {
      console.log(pos);
      const { latitude: lat, longitude: lang } = pos.coords;
      console.log(lat, lang);
      return fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`the code produces anything ${res.status}`);

      return res.json();
    })
    .then((data) => {
      console.dir(data);
      console.log(`im in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => {
      return renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err.message}`);
      errad(`something went wrong ${err.message}.try again`);
    });
};

btn.addEventListener("click", function () {
  whereAmI();
});
*/
/*
const imageContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2).then(() => console.log("hello mom"));

const creatImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imageContainer.append(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("image not found"));
    });
  });
};

let image;
creatImage("/async/img/img-1.jpg")
  .then((img) => {
    image = img;
    console.log("image 1 is loaded");
    return wait(2);
  })
  .then(() => {
    image.style.display = "none";
    return creatImage("/async/img/img-2.jpg");
  })
  .then((img) => {
    image = img;
    console.log("image 2");
    return wait(2);
  })
  .then(() => {
    image.style.display = "none";
  });*/

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();

    const { latitude: lat, longitude: lang } = pos.coords;

    const home = await fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`);
    if (!home.ok) throw new Error("problem with location data");

    const homeCode = await home.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${homeCode.country}`
    );
    if (!res.ok) throw new Error("problem with location data");
    console.log(res);
    const code = await res.json();

    renderCountry(code[0]);
    return `im in ${code[0].capital[0]},${code[0].altSpellings[1]}`;
  } catch (err) {
    console.error(err);
    renderError(`something went wrong ${err.message}`);
    throw err;
  }
};
console.log("1 first executed");
// const loca = whereAmI().then((city) => console.log(city));
// console.log(loca);
// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.log(`1:${err.message}`));
// console.log("2 first executed");

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.log(`1:${err.message}`);
  }
})();
console.log("3 first executed");
*/
/*
const getJSON = async function (url, errorMsg = "Something went wrong") {
  // return fetch(url).then((response) => {
  //   if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

  return response.json();
  // });
};

const get3Country = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital[0]));
  } catch (err) {}
};
get3Country("kenya", "uganda", "burundi");

(async function () {
  const data = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/tanzania`),
    getJSON(`https://restcountries.com/v3.1/name/kenya`),
    getJSON(`https://restcountries.com/v3.1/name/congo`),
  ]);
  console.log(data[0]);
})();

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("took too long to load"));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/uganda`),
  timeOut(0.2),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err.message));

const loadPause = async function ([im1, im2, im3]) {
  try {
    new Promise(function (resolve, reject) {
      const img = document.createElement("img");
      img.src = imgPath;
      img.addEventListener("load", function () {
        imageContainer.append(img);
      });
    });
  } catch (err) {}
};
loadPause();
*/
///////////////////////////////////////////////////////////////////////////////////////////
const imageContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2).then(() => console.log("hello mom"));

const creatImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imageContainer.append(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("image not found"));
    });
  });
};

const loadPause = async function () {
  try {
    let img = creatImage("/async/img/img-1.jpg");

    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    //// img 2
    img = creatImage("/async/img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {}
};
loadPause();

// loadAll(["/async/img/img-1.jpg", "/async/img/img-2.jpg"]);
/*
  .then((img) => {
    image = img;
    console.log("image 1 is loade");
    return wait(2);
  })
  .then(() => {
    image.style.display = "none";
    return creatImage("/async/img/img-2.jpg");
  })
  .then((img) => {
    image = img;
    console.log("image 2");
    return wait(2);
  })
  .then(() => {
    image.style.display = "none";
  });*/
