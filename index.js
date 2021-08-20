const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let arrays = [];

createArrayOfArrays(countries);

function createArrayOfArrays(countries) {
  countries.map((item, index) => {
    const abr = item.split("").splice(0, 3).join("");
    const countriesNameLength = item.length;

    return arrays.push([item + " " + abr + " " + countriesNameLength]);
  });
}
console.log(arrays);
