let pounds = document.querySelector(".pounds");
let kilogram = document.querySelector(".kilograms");
let grams = document.querySelector(".grams");
let ounces = document.querySelector(".ounces");
const form = document.querySelector("form");

const covertWeight = (e) => {
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;
    kilogram.value = (x / 2.2046).toFixed(3);
    grams.value = (x * 453.592).toFixed(3);
    ounces.value = (x * 16).toFixed(3);
  }

  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;
    pounds.value = (x * 2.2046).toFixed(3);
    grams.value = (x * 1000).toFixed(3);
    ounces.value = (x * 35.274).toFixed(3);
  }

  if (e.target.classList.contains("grams")) {
    let x = e.target.value;
    pounds.value = (x / 454).toFixed(3);
    kilogram.value = (x / 1000).toFixed(3);
    ounces.value = (x * 0.035274).toFixed(3);
  }

  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;
    pounds.value = (x / 16).toFixed(3);
    grams.value = (x / 0.035274).toFixed(3);
    pounds.value = (x / 16).toFixed(3);
  }
};

form.addEventListener("input", covertWeight);

/**
 * kg to all

pounds = kg *2.2046
grams = kg * 1000
ouncess = kg * 35.274

pound to all

kg = pound/2.2046
grams = pound * 454
ounces = pound * 16

grams to all

kg = grams / 1000
pounds = grams / 454
ounces = grams * 0.035274

ounces to all

kg = ounces / 35.274
grams = ounces / 0.035274
pounds = ounces / 16

 */
